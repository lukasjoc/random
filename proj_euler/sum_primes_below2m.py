#!/usr/bin/env python3

def sum_primes(limit: int) -> int:
    primes, num = [2], 3
    while primes[-1] < limit:
        for p in primes:
            if (num%p) == 0:
                break
        else:
            print(num)
            primes.append(num)
        num += 2
    return primes

if __name__ == "__main__":
  print(sum(sum_primes(limit=2_000_000)))