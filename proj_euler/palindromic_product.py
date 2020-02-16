#!/usr/bin/env python

def pal() -> list:
    palindromics = []
    start, limit = 1000, 10000
    for n in range(start, limit):
        for subn in range(start, limit):
            product = int(n*subn)
            temp, rev = product, 0
            while temp != 0:
                rev  = ( rev * 10 ) + ( temp % 10 )
                temp //= 10
            if product == rev:
                #print(f"{n}x{subn} => pal() = {n*subn}")
                palindromics.append(product)

    return palindromics # LOL this sounds like an autobot

if __name__ == "__main__":
    print(max(pal()))
