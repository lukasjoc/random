// Package luhn ...
package luhn

import (
	"fmt"
	"log"
	"strconv"
	"strings"
)

// Valid ...
func Valid(input string) (isLuhn bool) {

	//  convert the int to string slice
	var digits []int
	f := strings.Fields(input)
	for _, ff := range f {
		d, err := strconv.Atoi(ff)
		if err != nil {
			log.Fatalf("could not convert string %s to int %v", ff, err)
		}
		digits = append(digits, d)
	}
	fmt.Println("All digits >>", digits)

	// Calculate the sequence accordingly
	// This is still bad because i should only go over every second value instead of all
	var pruned []int

	for i, digit := range digits {
		if digit == 1 || (i%2) == 0 {
			double := digit * 2
			if double > 9 {
				pruned = append(pruned, digit-9)
			}
			pruned = append(pruned, double)
			break
		}
		pruned = append(pruned, digit)
	}
	fmt.Println("Pruned Slice >>", pruned)

	// a single zero value is invalid
	if len(pruned) == 1 && pruned[0] == 0 {
		return false
	}

	// Compute the sum of changed sequence
	var sum int
	for _, d := range pruned {
		sum += d
	}
	fmt.Println("Sum >>", sum)

	// Check if sum is evenly divisable by 10 and valid
	if (sum % 10) == 0 {
		return true
		fmt.Printf("RESULT: %v \n\n", true)
	}
	fmt.Printf("RESULT: %v \n\n", false)

	return isLuhn
}

// reverse int
func rev(n int) (nn int) {
	for n > 0 {
		remainder := n % 10
		nn *= 10
		nn += remainder
		n /= 10
	}
	return nn
}
