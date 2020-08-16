package main

import (
	r "reflect"
	"testing"
)

func SortTest(t *testing.T) {
	data := []int{90, 1, 15, 13, 6}
	exp := []int{1, 6, 13, 15, 90}
	if ok := Sort(data); !r.DeepEqual(ok, exp) {
		t.Errorf("test of %v was %v expected %v", data, ok, exp)
	}
}
