#!/usr/bin/env python3

def sum_square_diff(n: int) -> int:
    sum_n = (n*(n+1)/2) # gaussian summing
    return int((sum_n*sum_n)-(n*(n+1)*(2*n+1)/6)) #gaussian squaring

if __name__ == "__main__":
  print(sum_square_diff(n=1000))
