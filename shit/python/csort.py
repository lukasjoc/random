#!/usr/bin/env python3

# cool this is counting sort..
# great sorting algo.
# this is at worst Time: O(n+k) and Space: O(n+k) so this is greate
def countingSort(array):
    size = len(array)
    output = [0] * size
    count = [0] * int(max(array)+1)

    for i in range(0, size):
        count[array[i]] += 1

    for i in range(1, int(max(array))):
        count[i] += count[i - 1]

    i = size - 1
    while i >= 0:
        output[count[array[i]] - 1] = array[i]
        count[array[i]] -= 1
        i -= 1

    for i in range(0, size):
        array[i] = output[i]

    return output

if __name__ == "__main__":
    print(countingSort(array=[4, 2, 2, 8, 3, 3, 1]))

