#!/usr/bin/python3

# Calculating pi with the Nilakantha-Series (3+4/(2*3*4) - 3+4/(4*5*6) + 3+4/(6*7*8) ...)
def pi_nks(limit: int) -> float:
  pi_nks, s = 3.0, 1
  for i in range(2,limit,2):
    pi_nks = pi_nks + (s*4/(i*(i+1)*(i+2)))
    s = s*(-1)
  return pi_nks

if __name__ == "__main__":
  print(pi_nks(limit=100000))
