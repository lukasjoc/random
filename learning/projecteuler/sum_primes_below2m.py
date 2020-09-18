#!/usr/bin/env python3
# 
# def sum_primes(limit: int) -> int:
#     primes, num = [2], 3
#     while primes[-1] < limit:
#         for p in primes:
#             if (num%p) == 0:
#                 break
#         else:
#             primes.append(num)
#         num += 2
#     return primes
# 
# if __name__ == "__main__":
#     # this code is superbly inefficient.. someone (me :)) should definitely  use
#     # a thieve alg. like the Sieve of Eratosthenes to find primes.... lol
#     print(sum(sum_primes(limit=2_000_000)))
# 
# 

marked = [0] * 2_000_000
value, s = 3, 2
while value < 2_000_000:
    if marked[value ] == 0:
        s += value
        i = value
        while i < 2_000_000:
            marked[i] = 1
            i+= value
    value += 2

print(s)
