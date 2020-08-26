// Package accumulate implements a conversion process on an arbitrary slice of strings
package accumulate

// Accumulate implements a conversion on an input slice of strings
func Accumulate(input []string, converter func(string) string) []string {
	var crool []string
	for _, i := range input {
		crool = append(crool, converter(i))
	}
	return crool
}
