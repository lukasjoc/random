package main

import "fmt"

func main() {

	var m map[int]string

	m = map[int]string{
		1: "One",
	}

	for k, v := range m {
		fmt.Printf("Key: %v => Value: %v", k, v)
	}
}
