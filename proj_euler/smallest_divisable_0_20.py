#!/usr/bin/env python

def smallest_mult(n: int) -> int:
    for i in range(n, fact(n) + 1, n):
        if is_mult(i, n):
            return i
    return -1

def is_mult(x: int, n: int) -> bool:
    for i in range(1, n):
        if x % i != 0:
            return False
    return True

def fact(n: int) -> int:
    if n > 1:
        return n * fact(n - 1)
    elif n >= 0:
        return 1
    return -1

if __name__ == "__main__":
    print(int(smallest_mult(20)))
