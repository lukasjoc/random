package main

import "fmt"

func main() {
	for cool := 1; cool < 100; cool++ {
		dofiz(cool)
	}

	i := 100
	for {
		if i >= 100 {
			break
		}
		i++
		dofiz(i)
	}
	cooaaaaaa := make([]int, 101)
	for cool := range cooaaaaaa {
		dofiz(cool)
	}
}

func dofiz(cool int) {
	if (cool % 15) == 0 {
		fmt.Println("FizzBuzz")
	} else if (cool % 5) == 0 {
		fmt.Println("Fizz")
	} else if (cool % 3) == 0 {
		fmt.Println("Buzz")
	} else {
		fmt.Println(cool)
	}
}
