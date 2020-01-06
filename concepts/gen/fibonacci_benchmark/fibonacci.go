package main

import (
	"fmt"
	s "strconv"
)

// BENCHMARK========================================================================
// goos: darwin
// goarch: amd64
// pkg: github.com/lukasjoc/random/concepts/gen/fibonacci_benchmark
// BenchmarkFib10-8   	 5547764	       213 ns/op	       0 B/op	       0 allocs/op
// BenchmarkFib25-8   	    3885	    296314 ns/op	       0 B/op	       0 allocs/op
// BenchmarkFib35-8   	      32	  36736662 ns/op	       0 B/op	       0 allocs/op
// BenchmarkFib15-8   	  494173	      2389 ns/op	       0 B/op	       0 allocs/op
// BenchmarkFib45-8   	       1	4513983557 ns/op	       0 B/op	       0 allocs/op
// PASS
// ok  	github.com/lukasjoc/random/concepts/gen/fibonacci_benchmark	9.525s
// =================================================================================

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
