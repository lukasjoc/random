package main

import (
	"fmt"
	"reflect"
)

type Slicing interface {
	GetLast()
	GetFirst()
	GetAny()
	Remove()
	RemoveLast()
}

// anyToSlice converts any input type given the interface{} builtin type to a full slice variant,
// creates the slice with the same lenght and values. !!The slice that is given for reflection IS NOT the slice
// receiving back after the reflection process but a TIGHT copy...
func anyToSlice(t interface{}) (out []interface{}, ok bool) {
	slice, success := typeCheck(t, reflect.Slice)
	success = ReflectionFailure(success)

	sliceLen := slice.Len()

	out = make([]interface{}, sliceLen)
	for i := 0; i < sliceLen; i++ {
		out[i] = slice.Index(i).Interface()
	}

	return out, true
}

// typeCheck checks the input type of the reflection process with reflect, returns boolish
// on typeCheck success and failure
func typeCheck(t interface{}, kind reflect.Kind) (val reflect.Value, ok bool) {
	val = reflect.ValueOf(t)
	if val.Kind() == kind {
		ok = true
	}
	return
}

// ReflectionFailure returns boolish given the reflection result
func ReflectionFailure(failure bool) bool {
	if !failure {
		return true
	}
	return false
}

// GetLast returns the last element of a given input slice of any type after the reflection process. The last element in the input slice is also
// the last element in the reflection slice...
func GetLast(t interface{}) interface{} {
	slice, _ := anyToSlice(t)

	return slice[len(slice)-1]
}

// GetFirst returns the first element of a given input slice of any type after the reflection process. The first element in the input slice is also
// the first element in the reflection slice...
func GetFirst(t interface{}) interface{} {
	slice, _ := anyToSlice(t)

	return slice[0]
}

// GetAny returns a slice of values from the input slice of any type specified in the elems slice. List is sorted if the input slice is sorted
// Does not sort the result...
func GetAny(t interface{}, elems []int) (temp []interface{}) {
	slice, _ := anyToSlice(t)

	for _, i := range elems {
		for j, elem := range slice {
			if i == j {
				temp = append(temp, elem)
			}
		}
	}

	return temp
}

// Remove removes one element from the front of a given input slice of any type any. Order cannot be guaranteed after reflection and
// deletion process ...
func Remove(t interface{}, elem int) interface{} {
	slice, _ := anyToSlice(t)
	slice = append(slice[:elem], slice[elem+1:]...)

	return slice
}

// RemoveLast removes the last element from a given input slice of any type any. Does not sort list after deletion, list sustains
// order if input list was ordered..
func RemoveLast(t interface{}) interface{} {
	slice, _ := anyToSlice(t)

	last := len(slice) - 1
	slice = append(slice[:last], slice[last+1:]...)

	return slice
}

func main() {
	var testData []interface{}
	testData = append(testData, []string{"test", "test", "test4"})
	testData = append(testData, []rune{'r', 'l', 't'})
	testData = append(testData, []int{1, 3, 6})
	testData = append(testData, []int64{232, 2323, 923})
	testData = append(testData, []float32{13.00, 245.99, 77.66})
	testData = append(testData, []float64{13.17, 233.33, 45.67})
	testData = append(testData, []bool{false, true, true})

	for _, c := range testData {
		first := GetFirst(c)
		last := GetLast(c)
		any := GetAny(c, []int{0})
		remove := Remove(c, 0)
		removeLast := RemoveLast(c)
		fmt.Printf("Slice: %v, GetFirst %v, GetLast: %v, GetAny: %v, Remove: %v, RemoveLast: %v \n", c, first, last, any, remove, removeLast)
	}
}
