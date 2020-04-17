// package main implements a basic int based stack in golang with push, pop, peek and len
package main

import (
	"fmt"
	"time"
)

// node is a basic element of the stack
type node struct {
	value     int
	timestamp time.Time
}

// stack is a basic collection of *[]node elements that keeps track with a counter
type stack struct {
	nodes []*node
}

// push adds an *[]node element to the the top of the stack
func (s *stack) push(n *node) {
	s.nodes = append(s.nodes[:len(s.nodes)], n)
}

// pop removes the last index from the nodes slice
func (s *stack) pop() []*node {
	if len(s.nodes) != 0 {
		s.nodes = remove(s.nodes, len(s.nodes)-1)
		return s.nodes
	}
	return nil
}

// next element to ppop
func (s *stack) peek() []*node {
	if len(s.nodes) != 0 {
		return s.nodes[len(s.nodes)-1:]
	}
	return nil
}

// len returns the "length" of the stack.
func (s *stack) scount() int64 {
	if len(s.nodes) != 0 {
		return int64(len(s.nodes))
	}
	return 0
}

// Newstack returns a new *stack to play with
func NewStack() *stack {
	return &stack{}
}

func remove(collection []*node, last int) []*node {
	return append(collection[:last], collection[last+1:]...)
}

func main() {
	start := time.Now()
	defer execTime(start, "stack")

	mystack := NewStack()

	// Adding 100 nodes to the stack count should be 100
	for i := 0; i < 100; i++ {
		mystack.push(&node{value: i, timestamp: time.Now()})
	}
	fmt.Printf("First *node: %v \n", mystack.peek())
	fmt.Printf("stack Size: %v \n", mystack.scount())

	// Removing 60 nodes from the stack count should be 40
	for i := 0; i < 60; i++ {
		mystack.pop()
	}
	fmt.Printf("First *node: %v \n", mystack.peek())
	fmt.Printf("stack Size: %v \n", mystack.scount())
}

func execTime(start time.Time, name string) {
	elapsed := time.Since(start)
	fmt.Printf("INFO: exec time: %s took %s \n", name, elapsed)
}
