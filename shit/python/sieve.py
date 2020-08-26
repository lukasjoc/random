#!/usr/local/bin/python3

def nats(n):
    yield n
    yield from nats(n+1)

def sieve(s):
    n = next(s)
    yield n
    yield from sieve(i for i in s if i%n!=0)

if __name__ == "__main__":
    x = sieve(nats(2))
    print([next(x) for i in range(100)])
