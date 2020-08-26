package main

import "fmt"

var m = map[int64]rune{
	0: 'r',
}

func main() {
	for k, v := range m {
		fmt.Printf("Key: %v => Value: %v \n", k, string(v))
	}
}
