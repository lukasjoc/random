#!/usr/bin/env python3
# Translating the chinese manual

import sys
from PIL import Image
import pytesseract
import translators as ts

if len(sys.argv) > 1:
    IMAGE_PATH = str(sys.argv[1])
else:
    print("please provide an image of the original manual you got in the package")
    print("""you may also need the trained model for chinese
        https://github.com/tesseract-ocr/tessdata/blob/master/chi_sim.traineddata""")
    sys.exit(1)

image = Image.open(IMAGE_PATH)
image.load()

image_text = pytesseract.image_to_string(image, lang="chi_sim")
print("Now translating...", sep="\n")

res = ts.google(image_text, source_lang="chinese")
print(res)

