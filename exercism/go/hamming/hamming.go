// Keeps Funtion Distance which calcs the difference of 2 DNA strands and returns the sum in int64(on 64bit systems!)
package hamming

import "errors"

// Takes 2 strings and calculates the Hamming difference between 2 DNA strands
func Distance(a, b string) (int, error) {
	if len(a) != len(b) {
		return 0, errors.New("Inputs need equal length")
	}

	s := 0
	for ia, a := range a {
		for ib, b := range b {
			if a != b && ia == ib {
				s++
			}
		}
	}
	return s, nil
}
