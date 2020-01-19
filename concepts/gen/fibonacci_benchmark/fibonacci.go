package main

import "fmt"

// BENCHMARK========================================================================
// === RUN   TestFibo
// --- PASS: TestFibo (0.04s)
// === RUN   TestRatio
// --- PASS: TestRatio (0.05s)
// goos: darwin
// goarch: amd64
// pkg: github.com/lukasjoc/random/concepts/gen/fibonacci_benchmark
// BenchmarkFibo-12    	      38	  31242069 ns/op	       0 B/op	       0 allocs/op
// PASS
// ok  	github.com/lukasjoc/random/concepts/gen/fibonacci_benchmark	1.397s
// =================================================================================

// Calculate 42 Fibonacci numbers.. What to expect here is that with numbers getting bigger and bigger,
//the Golden Ratio should equalize the ratio of the numbers
func main() {
	for i := 0; i <= 42; i++ {
		fmt.Printf("Pos: %v CurrentFibonacci: %v :: CurrentRatio: %v :: GoldenRatio: %v \n",
			i,        // current index
			Fibo(i),  // current fibonacci
			Ratio(i), // current ratio of last and current fibonacci
			1.618033, // goldenRatio math constant
		)
	}
}

//Fibo calculates the Fibonacci numbers recursively ( ƒn = ƒn-1 + ƒn-2 for n>=3 )
func Fibo(n int) int {
	if n <= 2 {
		return n
	}
	return Fibo(n-1) + Fibo(n-2)
}

//Ratio calculates the Fibonacci numbers ratio recursively ( ƒn = ƒn-1 / ƒn-2 for n>=3 )
func Ratio(n int) float64 {
	if n <= 2 {
		return float64(n)
	}
	return float64(Fibo(n)) / float64(Fibo(n-1))
}
