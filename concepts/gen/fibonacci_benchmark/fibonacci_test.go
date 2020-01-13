package main

import "testing"

// BenchmarkFib10 benchmarks the 10th fibonacci number calculated from the recursive approach
// on creating the fibbonacci sequence
func BenchmarkFib10(b *testing.B) {
	for n := 0; n < b.N; n++ {
		Fibo(10)
	}
}

// BenchmarkFib15 benchmarks the 15th fibonacci number calculated from the recursive approach
// on creating the fibbonacci sequence
func BenchmarkFib15(b *testing.B) {
	for n := 0; n < b.N; n++ {
		Fibo(15)
	}
}

// BenchmarkFib25 benchmarks the 25th fibonacci number calculated from the recursive approach
// on creating the fibbonacci sequence
func BenchmarkFib25(b *testing.B) {
	for n := 0; n < b.N; n++ {
		Fibo(25)
	}
}

// BenchmarkFib35 benchmarks the 35th fibonacci number calculated from the recursive approach
// on creating the fibbonacci sequence
func BenchmarkFib35(b *testing.B) {
	for n := 0; n < b.N; n++ {
		Fibo(35)
	}
}

// BenchmarkFib45 benchmarks the 45th fibonacci number calculated from the recursive approach
// on creating the fibbonacci sequence
func BenchmarkFib45(b *testing.B) {
	for n := 0; n < b.N; n++ {
		Fibo(45)
	}
}
