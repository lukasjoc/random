package main

import (
	"fmt"
	"net"
	"os"
)

func main() {

	listen, err := net.Listen("unix", "/tmp/socketStream.sock")
	if err != nil {
		fmt.Fprintf(os.Stderr, "could not listen to socket %v \n", err)
		os.Exit(1)
	}
	defer listen.Close()
	for {
		fd, err := listen.Accept()
		if err != nil {
			fmt.Fprintf(os.Stderr, "could not accept connection %v \n", err)
			os.Exit(1)
		}
		go server(fd)
	}
}

// simple server that reads from net.Conn
func server(c net.Conn) {
	for {
		buf := make([]byte, 512)
		nr, err := c.Read(buf)
		if err != nil {
			fmt.Fprintf(os.Stderr, "could not read data %v \n", err)
			os.Exit(1)
		}
		data := buf[0:nr]
		fmt.Printf("Server Data: %v", string(data))
		_, err = c.Write(data)
		if err != nil {
			fmt.Fprintf(os.Stderr, "could not write data %v \n", err)
			os.Exit(1)
		}
	}
}
