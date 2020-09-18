package main

import "fmt"

func bSearch(arr []int, n int) bool {

	head := 0
	mid := len(arr) / 2
	tail := len(arr) - 1

	for head <= tail {
		val := arr[mid]
		switch {
		case val == n:
			return true
		case val > n:
			tail = mid - 1
			mid = (head + tail) / 2
			continue
		}

		head = mid + 1
		mid = (head + tail) / 2
	}

	return false
}

func main() {
	arr := []int{1, 2, 3, 4, 5, 6, 7, 8, 9}
	n := 2
	res := bSearch(arr, n)
	fmt.Printf("found item %d in %v => state: %v\n", n, arr, res)
}
