package main

import (
	"fmt"
	strc "strconv"
	"time"
)

func main() {
	yyyy, month, dd := time.Now().Date()
	fmt.Printf("%v.%v.%v \n", strc.Itoa(dd), month, strc.Itoa(yyyy))
}
