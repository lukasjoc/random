//package main determines if a word is an isogram[true] or not[false]
package main

import "fmt"

//runes keeps track of the letters currently in test for an isogram
var runes []rune

// IsIsogram determines if a given string "input" is an isogram or not returning
// boolish with the result true for: is isogram , false for: is not isogram
func IsIsogram(input string) bool {
	for _, l := range input {
		if find(runes, l) {
			return true
		}
		runes = append(runes, l)
	}
	return false
}

func main() {
	notIsogram := IsIsogram("isogram") // exp. false
	isIsogram := IsIsogram("iisogram") // exp. true
	fmt.Printf("word: isogram, exp. false, got: %v \n", notIsogram)
	fmt.Printf("word: iisogram, exp. true, got: %v \n", isIsogram)
}

// find finds first duplicate "l" of type rune in a given rune slice
func find(vals []rune, val rune) bool {
	for _, v := range vals {
		if v == val {
			return true
		}
	}
	return false
}
