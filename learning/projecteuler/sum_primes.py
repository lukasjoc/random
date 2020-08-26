#!/usr/bin/env python3

def sum_primes():
    marked = [0] * 1_000_000
    value, s = 3, 2
    while value < 1_000_000:
        if marked[value ] == 0:
            s += value
            i = value
            while i < 1_000_000:
                marked[i] = 1
                i+= value
        value += 2

if -__name__ == "__main__":
    print(sum_primes())
