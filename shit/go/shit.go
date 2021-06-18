package main

import "fmt"

func main() {
	var d Dog
	d.run()
}

type Dog struct {
	name   string
	weight float32
	race   string
	age    int
}

func (d *Dog) run() {
	var dd = &Dog{
		name:   "Cloe",
		weight: 24.6,
		race:   "Golden Retriever",
		age:    8,
	}

	fmt.Printf(
		"Dog %s with weight %v of race %s at the age of %v runs...\n",
		d.name,
		d.weight,
		d.race,
		d.age,
	)
}
