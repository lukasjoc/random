package main

import "fmt"

func main() {
	var m map[int64]string
	m = map[int64]string{
		1: "TEST",
	}

	for k, v := range m {
		fmt.Printf("Key: %v => Value: %v \n", k, v)
	}
}
