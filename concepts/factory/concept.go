package factory

import (
	"bufio"
	"encoding/csv"
	"fmt"
	"io"
	"log"
	"os"
	"strconv"
)

type Dog struct {
	Name   string
	Age    int
	Race   string
	Weight string
}

// AllDogs keeps all Dogs
type AllDogs []*Dog

// NewDog is a factory for new Dogs, returning a pointer to the Dog type
func NewDog(name string, age int, race string, weight string) *Dog {
	return &Dog{
		Name:   name,
		Age:    age,
		Race:   race,
		Weight: weight,
	}
}

// Conceptualize is the concept for factory patterns in golang
func Conceptualize(data string) {

	// Track of pointer to Dog slice
	var doggies AllDogs

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

	for i, dog := range doggies {
		fmt.Println(i, dog)
	}
}
