package main

import (
	"fmt"
	"strings"
)

func hist(str string) map[string]int {

	words := strings.Fields(str)
	counts := make(map[string]int)

	// check if word currently in the map,
	// if so increment by 1 else
	// add new element with value 1
	for _, word := range words {
		if _, inMap := counts[word]; !inMap {
			counts[word] = 1
		} else {
			counts[word] += 1
		}
	}
	return counts
}

func main() {
	test := "Myknt #$ KL SD #$ we y y y y ui ui asd "
	fmt.Printf("Histogram: %v \n", test)
	for index, element := range hist(test) {
		fmt.Printf("%v => %v\n", index, element)
	}
}
