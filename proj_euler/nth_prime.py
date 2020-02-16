#!/usr/bin/env python3

def nth_prime(nth: int) -> list:
    primes, num = [2], 3

    while (len(primes)) < nth:
        for p in primes:
            if (num%p) == 0:
                break
        else:
            primes.append(num)
        num += 2
    return primes

if __name__ == "__main__":
    print(max(nth_prime(nth=1_000_1)))
