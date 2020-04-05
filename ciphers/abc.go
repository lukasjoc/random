package main

import (
	"fmt"

	abc "github.com/lukasjoc/abcindexcipher"
)

func main() {
	input := "test"

	encoded := abc.Encode(input)
	fmt.Printf("Input: %s, Encoded: %s\n", input, encoded)

	decoded := abc.Decode(encoded)
	fmt.Printf("Input: %s, Encoded: %s\n", encoded, decoded)
}
