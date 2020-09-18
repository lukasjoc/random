package main

import (
	"flag"
	"fmt"

	"github.com/lukasjoc/abcindexcipher"
)

var input = flag.String("input", "aby", "Some input for testing")

func main() {
	flag.Parse()

	encoded := abcindexcipher.Encode(*input)
	fmt.Printf("Input: %s, Encoded: %s\n", *input, encoded)

	decoded := abcindexcipher.Decode(encoded)
	fmt.Printf("Input: %s, Encoded: %s\n", encoded, decoded)
}
