package main

import (
	"log"
	"time"

	"github.com/lukasjoc/random/concepts/factory"
)

func main() {
	start := time.Now()
	defer trackExec(start, "factory")
	factory.Conceptualize("./data/dogs.csv")
}

func trackExec(start time.Time, name string) {
	ella := time.Since(start)
	log.Printf("INFO: exec time: %s took %s", name, ella)
}
