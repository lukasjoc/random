package main

import (
	"flag"
	"fmt"
	"log"

	"code.sajari.com/docconv"
)

var (
	file    = flag.String("file", "", "File for conversion")
	outfile = flag.String("o", "", "Output file name")
)

func main() {
	flag.Parse()

	if *file == "" && *outfile == "" {
		ret, convErr := docconv.ConvertPath("./test.pdf")
		if convErr != nil {
			log.Fatalf("could not convert %s to plain text file in this process: %v\n", *file, convErr)
		}
		if fileErr := writeOutFile(*outfile, ret); fileErr != nil {
			log.Fatalf("could not write to outfile %s: %v\n", *outfile, fileErr)
		}
		return
	}

	log.Fatal("must provide any --file= and -o=SOME_NAME.txt\n")
}

func writeOutFile(outfile string, ret interface{}) err {
	fmt.Println(outfile, ret)
	return nil
}
