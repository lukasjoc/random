#!/usr/bin/env python

def power_digit_sum(base: int, exp: int) -> list:
    digits = []
    sum_str = str(2**exp)
    for d in sum_str:
        digits.append(int(d))

    return digits

if __name__ == "__main__":
    print(sum(power_digit_sum(base=2, exp=1000)))
