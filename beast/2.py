#!/usr/bin/env python3

def main(a):
    dups = []
    for n in a:
        if n in a and n not in dups:
            dups.append(n)
            continue
        return n

if __name__ == "__main__":
    print(main([11, 32, 44, 44]))

