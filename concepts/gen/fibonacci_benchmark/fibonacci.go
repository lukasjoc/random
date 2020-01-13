package main

import (
	"fmt"
	s "strconv"
)

// BENCHMARK========================================================================
// goos: darwin
// goarch: amd64
// pkg: github.com/lukasjoc/random/concepts/gen/fibonacci_benchmark
// BenchmarkFib10-8   	 4941902	       241 ns/op	       0 B/op	       0 allocs/op
// BenchmarkFib15-8   	  463603	      2593 ns/op	       0 B/op	       0 allocs/op
// BenchmarkFib25-8   	    3798	    318674 ns/op	       0 B/op	       0 allocs/op
// BenchmarkFib35-8   	      31	  39459063 ns/op	       0 B/op	       0 allocs/op
// BenchmarkFib45-8   	       1	4902709860 ns/op	       0 B/op	       0 allocs/op
// PASS
// ok  	github.com/lukasjoc/random/concepts/gen/fibonacci_benchmark	10.082s
// =================================================================================

// Calculate 45 Fibonacci numbers
func main() {
	for i := 0; i <= 1000; i++ {
		fmt.Printf("Pos: %v Numbner: %v\n", i, s.Itoa(Fib(i)))
	}
}

//Calculate Fibonacci recursively ( ƒn = ƒn-1 + ƒn-2 for n>=3 )
func Fib(n int) int {
	if n <= 2 {
		return n
	}
  return Fib(n-1) + Fib(n-2)
}
