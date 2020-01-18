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

	resInt64, okInt64 := takeSlice([]int64{123, 321, 1234, 4321})
	resRune, okRune := takeSlice([]rune{'a', 'b', 'c', 'd', 'e', 'f'})
	resBool, okBool := takeSlice([]bool{false, false, true, true})
	resInt, okInt := takeSlice([]int{123, 321, 1234, 4321})
	resStr, okStr := takeSlice([]string{"LOL", "WOW", "STRING"})
	
	fmt.Printf("Res: %v Ok: %v \n", resRune, okRune)
	fmt.Printf("Res: %v Ok: %v \n", resInt, okInt)
	fmt.Printf("Res: %v Ok: %v \n", resInt64, okInt64)
	fmt.Printf("Res: %v Ok: %v \n", resBool, okBool)
	fmt.Printf("Res: %v Ok: %v \n", resStr, okStr)

	intSlice := []int{12,13,14}
	first := getFirst(intSlice)
	fmt.Printf("Slice: %v First: %v \n", intSlice, first)

}
