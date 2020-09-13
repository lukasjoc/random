package main

import "fmt"

type tests struct {
	s1vals []*ts1
	s2vals []*ts2
}

type ts1 struct {
	testValue string
}

type ts2 struct {
	testValue string
}

func main() {
	var (
		t  tests
		s1 *ts1
		s2 *ts2
	)

	testValue := "Bob"
	s1.testValue = append(s1.testValue, &testValue)

	testValue = "Alice"

	t.s1vals = append(t.s1vals, s1)
	t.s2vals = append(t.s2vals, s2)

	fmt.Printf("%s\n", t)
}
