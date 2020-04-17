#!/usr/bin/env python3

class HolyIter:
    def __init__(self):
        self.x = 0

    def __next__(self):
        self.x += 1
        return self.x**self.x

    def __iter__(self):
        return self

if __name__ == "__main__":
    h = HolyIter()
    n = 0

    while True:
        print(h.__next__())
        n += 1
        if n > 10:
            raise StopIteration("Stopping iteration with custom iterator protocol!")

