def primeFactors(n):
    facts, by_two = {}, 0
    start = n
    while n % 2 == 0: 
        n //= 2
        by_two += 1
    for t in range(by_two):
        facts[2] = by_two
    for i in range(3, int(n**0.5)+1, 2): 
        while n % i == 0:
            n = n / i
            if i in facts:
                facts[i] += 1
            else:
                facts[i] = 1
    return facts


def prime_fac(num):
    for i in range(2,num + 1):
        if(num % i == 0):
            prime = True
            for j in range(2,(i//2 + 1)):
                if(i % j == 0):
                    prime = False
                    break
            if prime:
                return True

for i in range(2, 100):
    print(i, prime_fac(i))
