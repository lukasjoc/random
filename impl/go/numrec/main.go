package main

import (
	"bufio"
	"flag"
	"fmt"
	"math/rand"
	"os"
	"strconv"
	"strings"
	"time"
)

const SEC = time.Second

var (
	level   = flag.Int("level", 3, "set training level manually")
	recTime = flag.Int("time", 8, "set time for recognizing the numbers")
)

// produces random numbers with seed between nMin - nMax
func produce(nMin, nMax int) int {
	seedTime := time.Now().UnixNano()
	seed := rand.NewSource(seedTime)
	newRand := rand.New(seed)
	return nMin + newRand.Intn(nMax-nMin+1)
}

// prints remaining time to regognize a number
func blinkTime(remaining time.Duration, number int) {
	var (
		timer  *time.Timer
		ticker *time.Ticker
	)

	timer = time.NewTimer(remaining)
	ticker = time.NewTicker(SEC)

forEveryBlink:
	for {
		select {
		case <-ticker.C:
			remaining -= time.Duration(SEC)
			fmt.Printf("\rTime Left: %v :: Number: %d ", remaining, number)
		case <-timer.C:
			fmt.Println("DEBUG")
			break forEveryBlink
		}
	}

}

func train() int {
	for {

		nMin, nMax := genRanges(*level)
		n := produce(nMin, nMax)

		levelTime := time.Duration(*recTime) * SEC
		blinkTime(levelTime, n)
		fmt.Println("\033[H\033[2J")

		scanner := bufio.NewScanner(os.Stdin)
		scanner.Scan()
		answer := scanner.Text()

		if answer == "" {
			return *level
		}

		solution := strconv.Itoa(n)
		userInput := strings.TrimSpace(answer)
		if userInput != solution {
			fmt.Printf("FAIL: Level: %v, Correct: %s, You: %s \n", *level, solution, userInput)
			return *level
		}

		fmt.Printf("CORRECT: Level: %v, Correct: %s, You: %s \n", *level, solution, userInput)
		*level += 1
	}

	return *level
}

// handle and create number ranges based on the current level
func genRanges(level int) (nMin, nMax int) {
	sMin := "1"
	sMax := "9"
	for i := 0; i <= level-2; i++ {
		sMin += "0"
		sMax += "9"
	}

	nMin, _ = strconv.Atoi(sMin)
	nMax, _ = strconv.Atoi(sMax)
	return nMin, nMax
}

// kick of the training session. lets goooo
func main() {
	flag.Parse()

	// reject negative levels
	if *level < 1 {
		fmt.Printf("%v\n", flag.Usage)
	}

	res := train()

	fmt.Println("Do you want to save that score? [yes/no]")
	scanner := bufio.NewScanner(os.Stdin)
	scanner.Scan()
	answer := scanner.Text()

	if answer == "yes" {
		PersistAsJSON(res)
	}

	fmt.Println("See You Later..")

}
