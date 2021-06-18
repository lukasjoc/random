package main

import "time"
import "fmt"

func main() {
	rem := time.Duration(10 * time.Second)
	timer := time.NewTimer(rem)
	ticker := time.NewTicker(time.Second)

untilDone:
	for {
		select {
		case <-ticker.C:
			rem -= time.Duration(time.Second)
			fmt.Printf("%v", rem)
		case <-timer.C:
			break untilDone
		}
	}

}
