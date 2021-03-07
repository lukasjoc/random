import math

#  complexity is time: O(n^2) place O(1)
def divisorGenerator(n):
    large_divisors = []
    for i in range(1, int(math.sqrt(n) + 1)):
        if n % i == 0:
            yield i
            if i*i != n:
                large_divisors.append(n/i)
    for divisor in reversed(large_divisors):
        yield divisor

if __name__ == "__main__":
  print(list(divisorGenerator(10000000000000000000)))
