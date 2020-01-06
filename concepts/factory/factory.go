package main

import (
	"bufio"
	"encoding/csv"
	"fmt"
	"io"
	"os"
	s "strconv"
	"time"
)

type Dog struct {
	Name   string
	Age    int
	Race   string
	Weight string
}

// NewDog is a factory for new Dogs, returning a point64er to the Dog type
func NewDog(name, race, weight string, age int) *Dog {
	return &Dog{
		Name:   name,
		Race:   race,
		Weight: weight,
		Age:    age,
	}
}

// factorize implements the nicer factory pattern
func factorize(data string) []*Dog {

	var doggies []*Dog

	csvFile, err := os.Open(data)
	if nil != err {
		fmt.Fprintf(os.Stderr, "could not open: %v \n", err)
	}
	reader := csv.NewReader(bufio.NewReader(csvFile))

	for {
		line, err := reader.Read()

		if err == io.EOF {
			break
		} else if err != nil {
			fmt.Fprintf(os.Stderr, "could not read line: %v \n", err)
		}

		age, _ := s.Atoi(line[1])
		doggies = append(doggies, NewDog(
			line[0],
			line[2],
			line[3],
			age,
		))
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
	fmt.Printf("INFO: exec time: %s took %s \n", name, elapsed)
}
