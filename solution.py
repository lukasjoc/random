if __name__ == "__main__":
  # seq = [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]
  seq = [1,1,1,1,1,1,10,1,1,1,1]
  #seq = [5,4,3,2,1,5,4,3,2,10,10]
  c = {}
  for i in seq:
    print(f"{i}: {seq.count(i)}")
    c[i] = seq.count(i)
  
  # if value uneven return key of mapping pair
  for k, v in c.items():
    if (k%2) != 0:
      print(f"10 should equal {v}")
