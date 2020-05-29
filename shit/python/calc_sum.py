def factorize(lol, facts):
  for k, v in facts.items():
    if v > 1:
      lol.append(k**v)
    else:
      lol.append(k)
  prod = 1
  for factor in lol:
    prod = prod * factor
  return prod

if __name__ == "__main__":
  facts = {7: 1, 5113051: 1}
  lol = []
  print(factorize(lol, facts))
