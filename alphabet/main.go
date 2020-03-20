package main

import (
	"flag"
	"fmt"
	"strconv"
	"strings"
)

var input = flag.String("input", "test", "input string to convert")
var alphabet = map[int]rune{
	1:  'A',
	2:  'B',
	3:  'C',
	4:  'D',
	5:  'E',
	6:  'F',
	7:  'G',
	8:  'H',
	9:  'I',
	10: 'J',
	11: 'K',
	12: 'L',
	13: 'M',
	14: 'N',
	15: 'O',
	16: 'P',
	17: 'Q',
	18: 'R',
	19: 'S',
	20: 'T',
	21: 'U',
	22: 'V',
	23: 'W',
	24: 'X',
	25: 'Y',
	26: 'Z',
}

func main() {
	flag.Parse()

	deref := *input
	encoded := encode(deref)
	fmt.Printf("Input: %s, Encoded: %s\n", deref, encoded)

	decoded := decode(encoded)
	fmt.Printf("Input: %s, Decoded: %s\n", encoded, decoded)
}

// encode the thing
func encode(input string) (encoded string) {
	runes := []rune(strings.ToUpper(input))
	for _, let := range runes {
		for k, v := range alphabet {
			if v == let {
				intStr, sep := strconv.Itoa(k), "="
				encoded += fmt.Sprintf("%s%s", intStr, sep)
			}
		}
	}
	return encoded
}

// decode the thing
func decode(encoded string) (decoded string) {
	bits := strings.Split(encoded, "=")
	for _, bit := range bits {
		for k, v := range alphabet {
			bitInt, _ := strconv.Atoi(bit)
			if k == bitInt {
				decoded += string(v)
			}
		}
	}

	lower := strings.ToLower(decoded)
	return lower
}
