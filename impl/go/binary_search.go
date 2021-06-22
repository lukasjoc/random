package main

import (
	"testing"

	"gotest.tools/assert"
)

func bSearch(arr []int, x int) int {
	l := 0
	r := len(arr) - 1
	index := 0
	for l <= r {
		mid := (l + r) / 2
		if arr[mid] == x {
			return mid
		} else if x < arr[mid] {
			r = mid - 1
		} else if x > arr[mid] {
			l = mid + 1
		}
	}
	index++
	return -1
}

func main() {
	// asserting in golang is a joke
	var t = &testing.T{}
	arr := []int{0, 7, 10, 10}

	// return -1 if not in list
	assert.Equal(t, bSearch(arr, 8), -1)

	// return first if more then one
	assert.Equal(t, bSearch(arr, 10), 2)

	// return again with normal finding
	assert.Equal(t, bSearch(arr, 7), 1)
}
