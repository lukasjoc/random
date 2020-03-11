// Package isogram determines if a word is an isogram[true] or not[false]
// the term "isogram" describes a string of text without a single repeating character like the word i s o g r a m
// not so the word n o o b because of the o occuring twice
package isogram

import "unicode"

// IsIsogram determines if a given string "input" is an isogram or not returning
// boolish with the result true for: is isogram , false for: is not isogram
func IsIsogram(input string) bool {
	seen := map[rune]bool{}
	for _, r := range input {
		if r == ' ' || r == '-' {
			continue
		}
		r = unicode.ToUpper(r)
		if seen[r] {
			return false
		}
		seen[r] = true
	}
	return true
}
