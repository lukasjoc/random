// package histogram creates a histogram from input data
package histogram

import "strings"

// Histogram creates a histogram of a given string sequence data,
// returns with a map consisting of map[word]occurrence
func Histogram(data string) map[string]int {
	data = strings.ToLower(data)
	words := strings.Fields(data)

	var h map[string]int
	for _, w := range words {
		if _, inMap := h[w]; !inMap {
			h[w] = 1
		} else {
			h[w] += 1
		}
	}
	return h
}
