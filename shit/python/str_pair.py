import re
def dirReduc(arr: list) -> list:
    nono = ["NORTHSOUTH", "SOUTHNORTH", "WESTNORTH", "NORTHWEST"]
    
    # make pairs and one non pair then return lonely one
    if len(arr)%2 != 0:
      for previous, current in zip(arr, arr[1:]):
        print(previous, current)
    else:
      pass
        # make pairs and compare to nono
        # if pair match nono remove else return

    return ""


if __name__ == "__main__":
    uneven = ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]
    print(dirReduc(uneven))
    #even = ["NORTH", "WEST", "SOUTH", "EAST"]
    #print(dirReduc(even))