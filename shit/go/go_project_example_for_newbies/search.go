package main

// Search sorts linear through arr
func Search(arr []int, s int) bool {
	for _, n := range arr {
		if n == s {
			return true
		}
	}
	return false
}
