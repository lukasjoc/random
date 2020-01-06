package main

import (
	"fmt"
	s "strconv"
	"time"
)

func main() {
	yyyy, month, dd := time.Now().Date()
	fmt.Printf("%v.%v.%v \n", s.Itoa(dd), month, s.Itoa(yyyy))
}
