package main

// Node defines the node/link in the list
type struct Node {
	value interface{}
	next *node
	// double linked list this simple  butt needed?
	// prev *node 
}

func (node *node) add(value) *node {
	node.value = value
}

// TODO: find node
// TODO: remove node
// TODO: add new node
func main() {
	var root *node;
	
}
