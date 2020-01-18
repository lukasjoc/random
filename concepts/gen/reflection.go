package main

import (
	"fmt"
	"reflect"
)

// take any type, check type and convert internally to the exact type as slice and return it
func takeSlice(arg interface{}) (out []interface{}, ok bool) {
	slice, success := takeArg(arg, reflect.Slice)
	if !success {
		ok = false
		return
	}

	sliceLen := slice.Len()
	out = make([]interface{}, sliceLen)
	for i := 0; i < sliceLen; i++ {
		out[i] = slice.Index(i).Interface()
	}

	return out, true
}

// take argument lookup type return true if type matches type in argList
func takeArg(arg interface{}, kind reflect.Kind) (val reflect.Value, ok bool) {
	val = reflect.ValueOf(arg)
	if val.Kind() == kind {
		ok = true
	}
	return
}

// get first element from input slice
func getFirst(t interface{}) interface{} {
	slice, _ := takeSlice(t)
	return slice[0]
}

func main() {
	var testData []interface{}
	testData = append(testData, []string{"test", "test"})
	testData = append(testData, []rune{'r', 'l'})
	testData = append(testData, []int{1, 3})
	testData = append(testData, []int64{232, 2323})
	testData = append(testData, []float32{13.00, 245.99})
	testData = append(testData, []float64{13.17, 233.33})
	testData = append(testData, []bool{false, true})

	for _, c := range testData {
		slice, ok := takeSlice(c)
		first := getFirst(c)
		fmt.Printf("Slice: %v, State: %v, First: %v \n", slice, ok, first)
	}
}
