#!/usr/bin/env python3
# Translating the chinese manual

import sys
from PIL import Image
import pytesseract
# from googletrans import Translator
import translators as ts

if len(sys.argv) > 1:
    IMAGE_PATH = str(sys.argv[1])
else:
    print("please provide an image of the original manual you got in the package")
    sys.exit(1)

print(f"Now extracting from {IMAGE_PATH}...", sep="\n")
image = Image.open(IMAGE_PATH)
image_text = pytesseract.image_to_string(image)


print("Now translating...", sep="\n")
# trans = Translator()
# res = trans.translate(image_text, dest="de")
res = ts.google(image_text)

print("res", res)
# translated = str(res.text)

# print(translated, sep="\n")

