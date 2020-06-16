package main

// figure out the century from a given year
func century(year int) (c int) {
  if year <= 0 {
    c=0
    return c
  }
  if year <= 100 {
    c=1
    return c
  }
  if year%100 == 0 {
    c = year
    return 
  }
  return c
}


func main() {
  cen := century(1221)
  println(cen)
}
