// Package diffsquares finds the difference between the square of the sum and the sum of the squares of the first N natural numbers.
package diffsquares

// SquareOfSum sums each number to a limit and returns the squared version of the sum
func SquareOfSum(n int) int {
	sum := n * (n + 1) / 2
	return sum * sum
}

// SumOfSquares squares each number to a limit and returns the sum of all squares
func SumOfSquares(n int) int {
	return n * (n + 1) * (2*n + 1) / 6
}

// Difference returns the remainder between the square of a sum and a sum of squares
func Difference(n int) int {
	return SquareOfSum(n) - SumOfSquares(n)
}
