#!/usr/bin/env python3

import codecs

if __name__ == "__main__":
    died = 0.0
    with codecs.open("died_us_data.csv", "r", encoding="utf-8") as f:
        for line in f.readlines():
            died += int(line)
    print(f"US died: {died}, Die Rate: {(died*1e2)/432_132}")

