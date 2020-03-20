package main

import "fmt"

func main() {
	nums := make([]int, 1000000)
	for cool := range nums {
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
}
