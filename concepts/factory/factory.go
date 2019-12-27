package main

import (
	"bufio"
	"encoding/csv"
	"fmt"
	"io"
	"log"
	"os"
	"strconv"
	"time"
)

type Dog struct {
	Name   string
	Age    int
	Race   string
	Weight string
}

// NewDog is a factory for new Dogs, returning a point64er to the Dog type
func NewDog(name string, age int, race string, weight string) *Dog {
	return &Dog{
		Name:   name,
		Age:    age,
		Race:   race,
		Weight: weight,
	}
}

// factorize implements the nicer factory pattern
func factorize(data string) []*Dog {

	var doggies []*Dog

	csvFile, err := os.Open(data)
	if nil != err {
		log.Fatalf("could not open: %v \n", err)
	}
	reader := csv.NewReader(bufio.NewReader(csvFile))

	for {
		line, err := reader.Read()

		if err == io.EOF {
			break
		} else if err != nil {
			log.Fatalf("could not read line: %v \n", err)
		}

		age, _ := strconv.Atoi(line[1])
		doggies = append(doggies, NewDog(
			line[0],
			age,
			line[2],
			line[3]),
		)
	}
	return doggies
}

func main() {
	start := time.Now()
	defer trackExec(start, "factorize")
	dogs := factorize("./dogs.csv")
	for i, dog := range dogs {
		fmt.Printf("Dog %d => %v \n", i, dog)
	}
}

func trackExec(start time.Time, name string) {
	elapsed := time.Since(start)
	log.Printf("INFO: exec time: %s took %s", name, elapsed)
}
