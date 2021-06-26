#!/usr/bin/env python3

def remove_islands(matrix):
    """
    for each row check row
    for each index in row check same index in all rows
    """
    pass



    return matrix

assert remove_islands([
    [0,1,0,0],
    [1,0,1,0],
    [0,1,0,1]
    ]) == [
            [0,1,0,0],
            [1,0,0,0],
            [0,1,0,1]
            ]
