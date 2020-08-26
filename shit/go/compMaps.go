package main

import (
	"fmt"
	"reflect"
)

func main() {
	m := map[string]int{
		"hello": 1,
		"world": 2,
		"!":     3,
	}
	m1 := map[string]int{
		"hello": 1,
		"world": 2,
		"!":     3,
	}

	if !reflect.DeepEqual(m, m1) {
		fmt.Printf("%v is not deeply equal to %v \n", m, m1)
		return
	}
	fmt.Printf("%v is deeply equal to %v \n", m, m1)
}
