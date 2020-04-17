#!/usr/bin/env python3

import typing as T

# fib_generator generates the fibonacci series with a generater approach
def fib(n: int) -> T.Coroutine:
    if n > 2:
        fib_last = list(fib(n-1))[0]
        fib_before = list(fib(n-2))[0]
        yield fib_last+fib_before
    else:
        yield 1

if __name__ == "__main__":
    limit: int = 1000
    int_f: int = 0
    for n in range(1, limit, 1):
        next_n: int = next(fib(n=n))
        int_f += 1
        print(next_n, end=f"\xa0is the {int_f}st \xa0Fibonacci-Number\n")

