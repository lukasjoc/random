#!/usr/bin/env python3

# Calculating pi with the Gregory-Leibnitz-Series (4/1 - 4/2+1 + 4/2+3 ...)
def pi_gls(limit: int) -> float:
  pi_gls, s, start, step = 0.0, 1, 1, 2
  for i in range(start,limit, step):
    pi_gls = pi_gls + (s*(4/i))
    s = s*(-1)
  return pi_gls

if __name__ == "__main__":
  print(pi_gls(limit=500000))
