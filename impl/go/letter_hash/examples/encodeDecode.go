package main

import (
	"flag"
	"fmt"

	"github.com/lukasjoc/letter_hash"
)

var input = flag.String("input", "aby", "Some input for testing")

func main() {
	flag.Parse()

	encoded := letter_hash.Encode(*input)
	fmt.Printf("Input: %s, Encoded: %s\n", *input, encoded)

	decoded := letter_hash.Decode(encoded)
	fmt.Printf("Input: %s, Encoded: %s\n", encoded, decoded)
}
