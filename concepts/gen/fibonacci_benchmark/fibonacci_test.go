package main

import "testing"

type testFibonacci struct {
	value, result int
}

var testsFibo = []testFibonacci{
	{value: 0, result: 0},
	{value: 10, result: 89},
	{value: 15, result: 987},
	{value: 25, result: 121393},
	{value: 35, result: 14930352}, // think that is enough ;)
}

type testRatio struct {
	value  int
	result float64
}

var testsRatio = []testRatio{
	{value: 0, result: 0},
	{value: 10, result: 1.6181818181818182},
	{value: 15, result: 1.618032786885246},
	{value: 25, result: 1.6180339886704431},
	{value: 35, result: 1.6180339887498896},
}

func TestFibo(t *testing.T) {
	for _, c := range testsFibo {
		if fibonacciN := Fibo(c.value); fibonacciN != c.result {
			t.Errorf("for %v expected %v got: %v \n", c.value, c.result, fibonacciN)
		}
	}
}

func TestRatio(t *testing.T) {
	for _, c := range testsRatio {
		if ratioN := Ratio(c.value); ratioN != c.result {
			t.Errorf("for %v expected %v got: %v \n", c.value, c.result, ratioN)
		}
	}
}
func BenchmarkFibo(b *testing.B) {
	for n := 0; n < b.N; n++ {
		for _, c := range testsFibo {
			Fibo(c.value)
		}
	}
}
