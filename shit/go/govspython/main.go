package main

import (
	"fmt"
	"log"
	"time"
)

func search(arr []int, wanted int) bool {
	for _, n := range arr {
		if n == wanted {
			return true
		}
	}
	return false
}

func main() {
	start := time.Now()
	arr := []int{1, 2, 4, 6, 7}
	fmt.Println(search(arr, 7))
	elapsed := time.Since(start)
	log.Printf("Binomial took %s", elapsed)
}
