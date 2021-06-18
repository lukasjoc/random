package main

import "fmt"

func mergesort(data []int, res chan []int) {
	if len(data) < 2 {
		res <- data
		return
	}

	leftChan := make(chan []int)
	rightChan := make(chan []int)
	middle := len(data) / 2

	go mergesort(data[:middle], leftChan)
	go mergesort(data[middle:], rightChan)

	ldata := <-leftChan
	rdata := <-rightChan

	close(leftChan)
	close(rightChan)
	res <- merge(ldata, rdata)
	return
}

func merge(ldata []int, rdata []int) (result []int) {
	result = make([]int, len(ldata)+len(rdata))
	lidx, ridx := 0, 0

	for i := 0; i < cap(result); i++ {
		switch {
		case lidx >= len(ldata):
			result[i] = rdata[ridx]
			ridx++
		case ridx >= len(rdata):
			result[i] = ldata[lidx]
			lidx++
		case ldata[lidx] < rdata[ridx]:
			result[i] = ldata[lidx]
			lidx++
		default:
			result[i] = rdata[ridx]
			ridx++
		}
	}
	return
}

func main() {
	data := []int{5, 9, 1, 3, 4, 6, 6, 3, 2}
	res := make(chan []int)
	go mergesort(data, res)
	sorted := <-res
	fmt.Printf("%v\n", sorted)
}
