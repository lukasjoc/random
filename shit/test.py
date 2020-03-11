#!/usr/bin/env python3
import json

complex_types = dict, list, tuple
# TODO: get types recusively

def main(obj):
  # given n subtypes
  for i in enumerate(obj):
    print(i)
    # if type(i) in complex_types:
      # main(i)
      # if type(i) == dict:
      #   for k,v in i.items():
      #     print(f"{k}:{v}")

def misin():
  pass

if __name__ == "__main__":
  obj = ["a","b",({},{"one":"1","two":"2"},(1,2,3,{"2":"2","1":"1"}))]
  main(obj)

# https://stackoverflow.com/questions/1050773/parsing-an-unknown-data-structure-in-python
# https://dbader.org/blog/python-nested-unpacking
# using stacks to store data, types, layer infiormnation
