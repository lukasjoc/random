#!/usr/bin/env python3

def fib(n):
    return (fib(n)-1 + fib(n)-2)

if __name__ == "__main__":
    for n in range(2, 100):
        print(fib(n))

