// package histogram creates a histogram from input data
//BENCHMARK=============================================================================
// === RUN   TestHistogram
// --- PASS: TestHistogram (0.00s)
// goos: darwin
// goarch: amd64
// pkg: github.com/lukasjoc/random/concepts/gen/histogram
// BenchmarkHistogram-8   	  457970	      2408 ns/op	    1728 B/op	      18 allocs/op
// PASS
// ok  	github.com/lukasjoc/random/concepts/gen/histogram	1.136s
//BENCHMARK=============================================================================

package histogram

import "strings"

// Histogram creates a histogram of a given string sequence data,
// returns with a map consisting of map[word]occurrence
func Histogram(data string) map[string]int {
	data = strings.ToLower(data)
	words := strings.Fields(data)

	h := make(map[string]int)
	for _, w := range words {
		if _, inMap := h[w]; !inMap {
			h[w] = 1
		} else {
			h[w] += 1
		}
	}
	return h
}
