#!/usr/bin/env python3

def sum(arr, size):
    if len(arr) == 0:
        return arr
    return arr[0] if len(arr) == 1 else arr[0]+sum(arr[1:], size)

if __name__ == "__main__":
    #to save calculations
    arr = list(range(1,  999))
    size = len(arr)
    print(sum(arr, size))
