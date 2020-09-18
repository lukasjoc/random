package cmd

import (
	"flag"
	"fmt"
)

var message = flag.String("message", "Hello World!", "send a message")

func Cmd() {
	flag.Parse()
	fmt.Println(*message)
}
