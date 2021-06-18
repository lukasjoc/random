#!/usr/bin/python3

from PIL import Image
from numpy import complex, array
from tqdm import tqdm

import colorsys

W=1024
#W=142

def mandelbrot(x, y):
    def get_colors(i):
        color = 255 * array(colorsys.hsv_to_rgb(i / 255.0, 1.0, 0.5))
        return tuple(color.astype(int))

    c, cc = 0, complex(x, y)
    for i in range(1, 1000):
        if abs(c) > 2:
            return get_colors(i)
        c = c * c + cc
    return 0,0,0

if __name__ == "__main__":
    img = Image.new("RGB", (W, int(W / 2)))
    pixels = img.load()
    for x in tqdm(range(img.size[0])):
        for y in tqdm(range(img.size[1])):
            xx = (x - (0.75 * W)) / (W / 4)
            yy = (y - (W / 4)) / (W / 4)
            pixels[x, y] = mandelbrot(xx, yy)

    img.show()
    img.save("mandelbrot.jpg")
