// package main determines if a word is an isogram[true] or not[false]
// the term "isogram" describes a string of text without a single repeating character like the word i s o g r a m
// not so the word n o o b because of the o occuring twice
package main

import "fmt"

// runes keeps track of the letters currently in test for an isogram
var runes []rune

// IsIsogram determines if a given string "input" is an isogram or not returning
// boolish with the result true for: is isogram , false for: is not isogram
func IsIsogram(input string) bool {
	for _ , l := range input {
		if find(runes, l) {
			return false
		}
		runes = append(runes, l)
	}
	return true
}

// find finds first case independent duplicate "l" of type rune in a given rune slice this is also 
func find(vals []rune, val rune) bool {
	for _, v := range vals {
		if v == val {
			return true
		}
	}
	return false
}

func main() {
	isogram := IsIsogram("isogram") // expected: true
	emty := IsIsogram("") // expected: true
	iisogram := IsIsogram("iisogram")  // expected: false
	noob := IsIsogram("noob")  // expected: false
	
	// PRINT RESULTS----------------------------------------------------
	fmt.Printf("word: isogram, expected: true, got: %v \n", isogram)
	fmt.Printf("word: iisogram, expected: false, got: %v \n", iisogram)
	fmt.Printf("word: '', expected: true, got: %v \n", emty)
	fmt.Printf("word: noob, expected: false, got: %v \n", noob)
	// -----------------------------------------------------------------	
}

