#!/usr/bin/env python3

from itertools import combinations_with_replacement, product

def sums(m, with_zeros=False):
    if with_zeros:
        combinations = product(range(m+1), repeat=m)
    else:
        combinations = combinations_with_replacement(range(m+1), r=m)

    perms = [p for p in list(combinations) if sum(p)==m]

    return (perms, len(perms))

if __name__ == "__main__":
    cz, cz_len = sums(m=5, with_zeros=True)
    print(cz)
    print(cz_len)

    c, c_len = sums(m=5)
    print(c)
    print(c_len)
