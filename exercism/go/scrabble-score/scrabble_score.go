// Package scrabble calculates the "scrabble" value (int) of given string
package scrabble

import "unicode"

// runeScore calculates the score reading in the input as runes
func runeScore(input rune) (score int) {
	switch input {
	case 'a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't':
		score += 1
	case 'd', 'g':
		score += 2
	case 'b', 'c', 'm', 'p':
		score += 3
	case 'f', 'h', 'v', 'w', 'y':
		score += 4
	case 'k':
		score += 5
	case 'j', 'x':
		score += 8
	case 'q', 'z':
		score += 10
	}
	return score
}

// Score calculates a scrabble score based on the scrabble map and returns
// the score
func Score(input string) (score int) {
	for _, r := range input {
		score += runeScore(unicode.ToLower(r))
	}
	return score
}
