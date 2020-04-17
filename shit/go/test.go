package kata

import "fmt"

func FindOdd(seq []int) int {

	// candidates map number to count -> eg. -1 : 10
	candidates := make(map[int]int)

	if len(seq) >= 2 {

		// lookup candidates map
		// calulate map of candiates
		for _, a := range candidates {
			if _, inMap := candidates[a]; inMap {
				candidates[a] += 1
			} else {
				candidates[a] = 1
			}
		}
		fmt.Println(candidates)
		// loop through counts and return the uneven item
		//  for _, c := range uneven {
		//    if c%2 != 0 {
		//      return e
		//    }
		//  }
	}

	return seq[0]
}
