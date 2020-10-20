package main

import (
	"fmt"
	"io"
	"os"
)

type node struct {
	l    *node
	r    *node
	data int
}

type tree struct {
	root *node
}

func (t *tree) insert(data int) *tree {
	if t.root == nil {
		t.root = &node{data: data, l: nil, r: nil}
	} else {
		t.root.insert(data)
	}
	return t
}

func (n *node) insert(data int) {
	if n == nil {
		return
	} else if data <= n.data {
		if n.l == nil {
			n.l = &node{data: data, l: nil, r: nil}
		} else {
			n.l.insert(data)
		}
	} else {
		if n.r == nil {
			n.r = &node{data: data, l: nil, r: nil}
		} else {
			n.r.insert(data)
		}
	}
}

func print(w io.Writer, node *node, ns int, ch rune) {
	if node == nil {
		return
	}

	for i := 0; i < ns; i++ {
		fmt.Fprint(w, " ")
	}
	fmt.Fprintf(w, "%c:%v\n", ch, node.data)
	print(w, node.l, ns+2, 'L')
	print(w, node.r, ns+2, 'R')
}

func main() {
	tree := &tree{}
	tree.insert(100).insert(-20).insert(-50).insert(-15).insert(-60).insert(50).insert(60).
	insert(55).insert(85).insert(15).insert(5).insert(-10)
	print(os.Stdout, tree.root, 0, 'M')
}
