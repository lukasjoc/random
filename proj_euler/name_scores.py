#!/usr/bin/env python3


def name_scores(unsorted: list) -> list:
    for i, n in enumerate(sorted(unsorted)):
        print(f"{i}{n}")
    return unsorted
if __name__ == "__main__":
  filedata  = open("./INPUT_name_scores.txt", "r").read().split('\n')
  name_scores(unsorted=filedata)

