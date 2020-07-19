#!/usr/bin/env python3

def main(m, a):
    for n in a:
        if m in a:
            return(m)
    return

if __name__ == "__main__":
    print(main(55, range(1, 100)), "FOUND")

