# def pruneList(l1,l2):
#   for value1 in l1:
#     for value2 in l2:
#       if value2 in l1:
#         l1.remove(value2)
#       elif value1 in l2:
#         l1.remove(value1)
#   return l1

def pruneList(l1,l2):
  return [x for x in l1 if x not in l2]

if __name__ == "__main__":
  print(pruneList([1,2],[1]))
  print(pruneList([1,2],[1]))
  print(pruneList([1,2,2], []))
  print(pruneList([], [1,2]))