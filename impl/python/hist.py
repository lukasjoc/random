# -*- coding: utf-8 -*-
#/usr/bin/env python3


from pathlib import Path
import codecs
import matplotlib.pyplot as plt


# Q: Am I using BASH effectively?
# Q: Which commands do I use very often?
# count
# |
# |       |   |
# |   |   |   |  |
# |___|___|___|__|____ command
def create_histogram(data: list) -> dict:
    hist: dict = {}
    for v in data:
        if v in hist:
            hist[v] += 1
            continue
        hist[v] = 1
    return hist

if __name__ == "__main__":
    history: list = []

    # reading the history file
    history_file: str = ".bash_history"
    with codecs.open(f"{str(Path.home())}/{history_file}", "r", encoding="utf-8") as f:
        for line in f.readlines():
            history.append(line.rstrip())

    # plotting the histogram
    plt.ylabel("Count")
    plt.xlabel("Command")
    plt.title("bash-histogram")
    histogram: dict = create_histogram(data=history)
    plt.bar(list(histogram.keys()), histogram.values(), color="b")
    plt.show()
