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
	for _, l := range input {
		if find(runes, l) {
			return false
		}
		runes = nil
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
	isogram := IsIsogram("isogram")           // expected: true
	iisogram := IsIsogram("iisogram")         // expected: false
	emty := IsIsogram("")                     // expected: true
	noob := IsIsogram("noob")                 // expected: false
	wow := IsIsogram("qa-g frx ywc")          // expected: true despite the spaces
	longest := IsIsogram("subdermatoglyphic") // expected: true

	// PRINT RESULTS----------------------------------------------------
	fmt.Printf("string: isogram, expected: true, got: %v \n", isogram)
	fmt.Printf("string: iisogram, expected: false, got: %v \n", iisogram)
	fmt.Printf("string: '', expected: true, got: %v \n", emty)
	fmt.Printf("string: noob, expected: false, got: %v \n", noob)
	fmt.Printf("string: qa-g frx ywc, expected: true, got: %v \n", wow)
	fmt.Printf("string: subdermatoglyphic, expected: true, got: %v \n", longest)
	// -----------------------------------------------------------------
}
