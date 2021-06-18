#!/usr/bin/env python3

iterables = dict, list, tuple, map

nl = "\n"
trailing = ","
indent = "  "

# print all elements of give nested data structure to then go over all elements and format them given the data type
def main(iterable):
  return iterable, sum(len(iterable) for x in a) 

if __name__ == "__main__":
  iterable = [a,b,{"a":1,"a":1}]
  main(iterable)