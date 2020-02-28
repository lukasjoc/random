#!/usr/bin/env python3

def c_primes(limit: int) -> int:
    primes, num = [2], 3
    while primes[-1] < limit-3:
        for p in primes:
            if (num%p) == 0:
              break
        else:
          str_r = str(num)[::-1]
          if is_prime(int(str_r)):
            # print(f"{num}, {int(str_r)}")
            primes.append(num)
        num += 2
    return primes

def is_prime(num):
  if num > 1:
   for i in range(2,num):
       if (num % i) == 0:
           break
   else:
       return True
  else:
    return False

if __name__ == "__main__":
    # this code is superbly inefficient.. someone (me :)) should definitely  use
    # a thieve alg. like the Sieve of Eratosthenes to find primes.... lol
    print(len(c_primes(limit=1_000_000)))