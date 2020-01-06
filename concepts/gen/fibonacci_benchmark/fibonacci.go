package main

import (
	"fmt"
	s "strconv"
)

//goos: darwin
//goarch: amd64
//pkg: github.com/lukasjoc/random/concepts/gen/fibonacci_benchmark
//BenchmarkFib45-8   	       1	4510567102 ns/op	       0 B/op	       0 allocs/op
//PASS
//ok  	github.com/lukasjoc/random/concepts/gen/fibonacci_benchmark	4.517s

// Calculate 45 Fibonacci numbers
func main() {
	for i := 0; i <= 45; i++ {
		fmt.Println(s.Itoa(Fib(i)))
	}
}

//Calculate Fibonacci recursively
func Fib(n int) int {
	if n <= 2 {
		return n
	}
	return Fib(n-1) + Fib(n-2)
}
