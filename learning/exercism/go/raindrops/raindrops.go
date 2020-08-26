// Implements Convert Function for PlingPlangPlong Search
package raindrops

import "strconv"

// Takes int value and returns variants of Pling,Plang,Plong
func Convert(number int) (word string) {

	if number%3 == 0 {
		word += "Pling"
	}

	if number%5 == 0 {
		word += "Plang"
	}

	if number%7 == 0 {
		word += "Plong"
	}

	if word == "" {
		return strconv.Itoa(number)
	}

	return word
}
