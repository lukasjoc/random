package main

import "testing"

// Test Search method with short input list
func TestName(t *testing.T) {
	data := []int{1, 2, 4}
	exp := 4
	if ok := Search(data, exp); !ok {
		t.Errorf("test of %d was %v expected %v", exp, ok, true)
	}
}
