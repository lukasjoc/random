// package histogram creates a histogram from input data
package main

import (
	"fmt"
	"strings"
)

var histogram_map map[string]int64

// Histogram creates a histogram of a given string sequence data,
// returns with a map consisting of map[word]occurrence
func histogram(data string) histogram_map {
	h := make(histogram_map)
	words := strings.Fields(data)
	for _, w := range words {
		if _, inMap := h[w]; inMap {
			h[w] += 1
		} else {
			h[w] = 1
		}
	}
	return h
}

func main() {
	sentence := "A man a plan a canal - panama! A small-step semantics for a man tit for tat"
	histogram := histogram(sentence)
	fmt.Printf("Histogram for: %v\n%v", sentence, histogram)
}
