#!/usr/bin/env python3

def prime_facts(n) -> list:
    prime_facts, d = [], 2
    while (d*d <= n):
        while (n > 1):
            while (n % d) == 0:
                prime_facts.append(d)
                n /= d
            d += 1

    return prime_facts

if __name__ == "__main__":
    print(max(prime_facts(600851475143)))
