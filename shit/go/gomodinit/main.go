package main

import (
	"fmt"
	"net/http"
	"time"

	"github.com/lukasjoc/gomodinit/src/gomodinit"
)

func greet(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hello World! %s", time.Now())
	gomodinit.WriteHello()
}

func main() {
	http.HandleFunc("/", greet)
	http.ListenAndServe(":8080", nil)
}
