#!/usr/local/bin/python3

def search(arr, wanted):
    for n in arr:
        if n == wanted: 
            return True
    return False

if __name__ == "__main__":
    from timeit import default_timer as timer
    start = timer()
    ARR = [1, 2, 4, 6, 7]
    search(ARR, 7)
    end = timer()
    print((end-start))
