# binary_search  to find index of item in list
# return -1 if not in list else index of item
def binary_search(arr: list, x: int) -> int:
    l = 0
    r = len(arr)-1
    index = 0
    while l <= r:
        mid=(l+r)//2
        if arr[mid] == x:
            return mid
        elif x < arr[mid]:
            r=mid-1
        elif x > arr[mid]:
            l=mid+1
    index+=1
    return -1

if __name__ == "__main__":
    l: list = [0, 7, 10, 10]

    # return -1 if not in list
    assert binary_search(l, 8) == -1

    # return first if more then one
    assert binary_search(l, 10) == 2

    # return again with normal finding
    assert binary_search(l, 7) == 1

