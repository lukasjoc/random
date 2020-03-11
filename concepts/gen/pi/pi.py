#!/usr/bin/env python3

# Calculating pi with the circumference, and diamter of input data
def main(diameter: float, circumference: float) -> float:
  try:
    pie = circumference/diameter
  except TypeError as err:
    return f"Type mismatch.. Please consider using int and float as input values"
  return pie

if __name__ == "__main__":
  circumference = float(input("Please insert an arbitrary circumference of your imaginary circle: "))
  diameter = float(input("Please insert an arbitrary diameter of your imaginary circle: "))
  print(main(diameter, circumference))
