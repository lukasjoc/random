#!/usr/bin/env python3

def alphabetial_value(string: str)-> int:
  values = {}
  letters =  ["A","B","C","D","E","F","G","H","I","J","K","L","M","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  for l in range(0, len(letters)):
      values[l+1] = letters[l]
  svalue = 0

  for s in string:
    print(s, values.get(s))
  return svalue

def name_scores(unsorted: list) -> list:
    sorted_values = []
    for i, n in enumerate(sorted(unsorted)):
      sorted_values.append(i*alphabetial_value(n))
    return sorted_values

if __name__ == "__main__":
  filedata  = open("./INPUT_name_scores.txt", "r").read().split('\n')
  print(sum(name_scores(unsorted=filedata)))
