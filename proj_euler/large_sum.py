#!/usr/bin/env python3

def large_sum(numbers: list) -> int:
  ints = []
  for n in numbers:
    ints.append(int(n))
  return sum(ints)

if __name__ == "__main__":
  filedata  = open("./INPUT_large_sum.txt", 'r').read().split('\n')
  print(str(large_sum(numbers=filedata))[:10])