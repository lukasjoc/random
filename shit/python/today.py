#!/usr/bin/env python3

import argparse
import os

def main():
    parser = argparse.ArgumentParser("today CLI")
    parser.add_argument("--new", type=str , help="destination port")
    parser.add_argument("--push", type=str , help="destination port")

    args = parser.parse_args()

if __name__ == "__main__":
    main()
