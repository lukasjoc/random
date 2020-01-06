package main

import "testing"

// BenchmarkFib45 benchmarks the 45th fibonacci number calculated from the recursive approach
// on creating the fibbonacci sequence
func BenchmarkFib45(b *testing.B) {
	for n := 0; n < b.N; n++ {
		Fib(45)
	}
}
