#!/usr/bin/env python3

def mult3_5sum(limit) -> list:
    multiples = []
    for n in range(limit):
        if (n%3) == 0  or (n%5) == 0:
            multiples.append(n)
    return multiples

if __name__ == "__main__":
    print(sum(mult3_5sum(limit=1000)))
