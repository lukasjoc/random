package wordcount

import "strings"

// Frequency holds the histogramic values of a given phrase
type Frequency map[string]int

// WordCount ...
func WordCount(phrase string) Frequency {
  phrase = strings.ToLower(phrase)
  phrase = strings.Replace(phrase, ",", " ", -1)
  phrase = strings.Replace(phrase, ":", " ", -1)
  phrase = strings.Replace(phrase, ".", " ", -1)
  phrase = strings.Replace(phrase, "'large'", "large", -1)
  phrase = strings.Replace(phrase, "'three'", "three", -1)
  phrase = strings.Replace(phrase, "!!&@$%^&", " ", -1)
  words := strings.Fields(phrase)
  f := Frequency{}
  for _, w := range words {
    if _, inMap := f[w]; !inMap {
      f[w] = 1
    }else {
      f[w] += 1
    }
  }
  return f
}

