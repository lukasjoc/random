#!/usr/bin/env python3

def sum_square_diff(limit: int) -> int:
    a, b = 0, 0
    for n in range(1, limit+1):
        a += n
        b += n**2
    return int( (a**2) - (b) )


if __name__ == "__main__":
  print(sum_square_diff(limit=100))
