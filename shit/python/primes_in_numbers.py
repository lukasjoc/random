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

    facts_items = list(facts.items()) # all values from dict as tuples
    last = facts_items[-1:] #last value in dict
    if len(facts_items) == 1:
        for i in last:
            last = i[0]
            if is_prime(last):
                prime_fact = start/last
                facts[int(prime_fact)] = 1

    print(f"Start: {start}")
    print(f"Last: {last}")

    return prettify(facts)


def prettify(facts: dict) -> str:
    frmt = ""
    for k, v in facts.items():
        if v >= 2:
            frmt += f"({k}**{v})"
        else:
            frmt += f"({k})"
    return frmt

def is_prime(n):
    if n==2:
        return True
    else:
        for i in range(2,n):
            if(n%i)==0:
                return False
        return True
