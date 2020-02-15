#!usr/bin/env,python3

def even_fibs(fibs32: list ) -> list:
    even_fibs = []
    for f in fibs32:
      if f == 0:
        even_fibs.append(f)
      elif (f%2) == 0:
          even_fibs.append(f) 

    return even_fibs

if __name__ == "__main__":
  fib=[0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597,2584,4181,6765,10946,17711,28657,46368,75025,121393,196418,317811,514229,832040,1346269,2178309,3524578]
  print(sum(even_fibs(fib)))