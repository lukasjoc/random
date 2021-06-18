package letter_hash

import (
	"fmt"
	"strconv"
	"strings"
)

// hint: we could also do char as value here...
var alphabet = map[int]rune{
	1: 'A', 2: 'B',
	3: 'C', 4: 'D',
	5: 'E', 6: 'F',
	7: 'G', 8: 'H',
	9: 'I', 10: 'J',
	11: 'K', 12: 'L',
	13: 'M', 14: 'N',
	15: 'O', 16: 'P',
	17: 'Q', 18: 'R',
	19: 'S', 20: 'T',
	21: 'U', 22: 'V',
	23: 'W', 24: 'X',
	25: 'Y', 26: 'Z',
}

// hint: we could also do char as value here...
var lookupAlphabet = map[rune]int{
	'A': 1, 'B': 2,
	'C': 3, 'D': 4,
	'E': 5, 'F': 6,
	'G': 7, 'H': 8,
	'I': 9, 'J': 10,
	'K': 11, 'L': 12,
	'M': 13, 'N': 14,
	'O': 15, 'P': 16,
	'Q': 17, 'R': 18,
	'S': 19, 'T': 20,
	'U': 21, 'V': 22,
	'W': 23, 'X': 24,
	'Y': 25, 'Z': 26,
}

// Encode encodes the input string into the abccyphertext
func Encode(input string) (encoded string) {
	runes := []rune(strings.ToUpper(input))

	for _, c := range runes {
		if value, ok := lookupAlphabet[c]; ok {
			cv := strconv.Itoa(value)
			if value < 10 {
				cv = fmt.Sprintf("%d%s", 0, cv)
			}
			encoded += cv
		}
	}

	return encoded
}

// Decode decodes the abccypher into the input sequence
func Decode(input string) (decoded string) {
	var pairs []string
	var ret string

	for i, c := range input {
		ret += string(c)
		if i > 0 && (i+1)%2 == 0 {
			pairs = append(pairs, string(ret))
			ret = "" // found pair emty ret
		}
	}

	for _, pair := range pairs {
		lookup, _ := strconv.Atoi(pair)
		if value, ok := alphabet[lookup]; ok {
			decoded += strings.ToLower(string(value))
		}
	}
	return decoded
}
