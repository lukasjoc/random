#!/usr/bin/env python3

import typing as T

# A Generator is modifying the state of a local function but not destroying the state of its
# local variables. it Generates the values one by one and does not keep track of all the values in memory
# but just the current one generated. this saves speed and space
def duckGen(amount: int) -> T.Coroutine:
    for i in range(amount):
        yield i**i

if __name__ == "__main__":
    # duck is a generator which calcs the squares of numbes from 0 to 1000 but does not keep all of them in memory instead 
    # it gens the vals on the fly and forgets the n-1 immediately  after iteration closes for the value
    periods: int = 10
    ducks: T.Coroutine = duckGen(amount=periods)
    year: int  = 0

    while True:
        print(next(ducks), end="\xa0QUACKS\n")
        year += 1
        if year > periods:
            raise StopIteration("Iteration with ducks finished!")

