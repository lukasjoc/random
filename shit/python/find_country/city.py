#!/usr/bin/env python3

from geopy.geocoders import Nominatim


locator = Nominatim(user_agent="getcity")
loc = locator.geocode("Munich")
print(loc.latitude, loc.longitude)

