#!/usr/bin/env python

def self_powers(limit: int) -> list:
    powered_sums = []
    for i in range(1, limit+1):
        powered_sums.append(i**i)
    return powered_sums

if __name__ == "__main__":
    print(str(sum(self_powers(limit=1000)))[-10:])

