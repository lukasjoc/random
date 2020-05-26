#!/usr/bin/env python3

from geopy.geocoders import Nominatim

def find_plz(latitude, longitude):
    n = Nominatim(user_agent="some shit stop erroring for this")
    loc = n.reverse(f"{latitude}, {longitude}")
    print(loc.raw)
    print(type(loc.raw))
    locational = loc.raw

    for k in locational:
        if k == "address":
            print(k, type(k))

if __name__ == "__main__":

    import csv

    with open("./test.csv", newline='') as f:
    spamreader = csv.reader(csvfile, delimiter=' ', quotechar='|')
    print(find_country(latitude=48.1401731, longitude=11.5671738))
