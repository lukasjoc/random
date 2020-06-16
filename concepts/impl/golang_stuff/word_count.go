package main


import "strings"
import "fmt"

// Frequency holds the histogramic values of a given phrase
type Frequency map[string]int

// WordCount ...
func WordCount(phrase string) map[string]int {
  phrase = strings.ToLower(phrase)
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


func main() {
  phrase := "This is a test phrase. this is A TEst PHrase"
  wordcount := WordCount(phrase)
  fmt.Println(wordcount)
}


