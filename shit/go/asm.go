package main

import (
	"fmt"
)

type Asm struct {
	stack     map[string]int
	prev      map[string]int
	stackSize int
}

// add to stack
func (asm *Asm) Mov(v string, x int) {
	asm.stack[v] = x
}

// dec value on stack
func (asm *Asm) Dec(v string) {
	asm.stack[v] -= 1
}

// inc value on stack
func (asm *Asm) Inc(v string) {
	asm.stack[v] += 1
}

// decrease value until it is zero
func (asm *Asm) Jnz(v string, x int) {
	for asm.stack[v] == 0 {
		asm.Dec(v)
	}
}

// isIn v stack
// func (asm *Asm) isIn(v string) bool {
// 	if _, ok := asm.stack[v]; ok {
// 		return true
// 	}
// 	return false
// }
//

// Simple Program Executor
// func SimpleAssembler(program []string) map[int]string {
// 	var asm Asm
// 	asm.Mov("a", 1)
// 	// return asm.stack
// }
//

func main() {
	//	program := []string{"mov a 5", "inc a", "dec a", "dec a", "jnz a -1", "inc a"}
	// program := []string{"mov a -10", "mov b a", "inc a", "dec b", "jnz a -2"}

	var asm Asm

	// create new stack
	asm.stack = map[string]int{}

	// program
	asm.Mov("a", 5)
	asm.Inc("a")
	asm.Dec("a")
	asm.Dec("a")
	asm.Jnz("a", -1)
	asm.Inc("a")

	fmt.Println(asm.stack)
}

//
// https://www.codewars.com/kata/58e24788e24ddee28e000053/train/go
