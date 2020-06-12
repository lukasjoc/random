package main

import "fmt"

func binary(x int, data []int) []int {

	mid := len(data) / 2
	if len(data) > 1 {

		if data[mid] < x {
			return data[mid:len(data)]
		}

		return data[0:mid]
	}

	return data
}

func main() {
	data := []int{1, 24, 34, 454, 3434, 34344}
	x := 34344

	found := binary(x, data)
	for len(data) >= 2 {
		found = binary(x, found)
		fmt.Println(found)
	}

}
