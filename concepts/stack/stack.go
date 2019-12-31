// package main implements a basic int based stack in golang with push, pop, peek and len
package main

import (
	"fmt"
	"log"
	"time"
)

// Node is a basic element of the stack
type Node struct {
	Value     int
	TimeStamp time.Time
}

// Stack is a basic collection of *[]Node elements that keeps track with a counter
type Stack struct {
	nodes []*Node
	count int64
}

// push adds an *[]Node element to the the top of the stack
func (s *Stack) push(n *Node) {
	s.nodes = append(s.nodes[:s.count], n)
	s.count++
}

// pop removes the first *[]Node element from the stack
func (s *Stack) pop() *Node {
	if s.count != 0 {
		s.count--
		return s.nodes[s.count]
	}
	return nil
}

// peek returns the first *Node element
func (s *Stack) peek() *Node {
	if s.count != 0 {
		last := s.count - 1
		return s.nodes[last]
	}
	return nil
}

// len returns the "length" of the stack.
func (s *Stack) len() int64 {
	if s.count != 0 {
		return s.count
	}
	return 0
}

// NewStack returns a new *Stack to play with
func NewStack() *Stack {
	return &Stack{}
}

func main() {
	start := time.Now()
	defer trackExec(start, "stack")

	mystack := NewStack()

	// Adding 100 nodes to the stack count should be 100
	for i := 0; i < 100; i++ {
		mystack.push(&Node{Value: i, TimeStamp: time.Now()})
	}
	fmt.Printf("First *Node: %v \n", mystack.peek())
	fmt.Printf("Stack Size: %v \n", mystack.len())

	// Removing 60 nodes from the stack count should be 40
	for i := 0; i < 60; i++ {
		mystack.pop()
	}
	fmt.Printf("First *Node: %v \n", mystack.peek())
	fmt.Printf("Stack Size: %v \n", mystack.len())
}

func trackExec(start time.Time, name string) {
	elapsed := time.Since(start)
	log.Printf("INFO: exec time: %s took %s", name, elapsed)
}
