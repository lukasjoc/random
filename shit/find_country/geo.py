#!/usr/bin/env python3

from geopy.geocoders import Nominatim

def find_country(latitude, longitude):
    n = Nominatim(user_agent="some shit stop erroring for this")
    loc = n.reverse(f"{latitude}, {longitude}")
    return loc.address

if __name__ == "__main__":
    print(find_country(latitude=48.1401731, longitude=11.5671738))
