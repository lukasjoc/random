package main

import (
	"fmt"
	"strings"
)

func main() {
	word := "Lukas"
	runes := []string{}

	runes = strings.Split(word, "")
	for i, r := range runes {
		fmt.Printf("%d : %v \n", i, r)
	}
}
