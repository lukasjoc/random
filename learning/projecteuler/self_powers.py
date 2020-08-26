#!/usr/bin/python3

t = 0
for number in range(0, 1001):
    if (n % 10) != 0:
        t+=n**n

print("last ten", str(t)[-10:])

