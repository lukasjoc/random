#!/usr/bin/env python3

def args_test(arg, *argv, **kwargs):
    print("NORMAL ARG's:", arg)
    print("ARGV's:", *argv)
    print("KWARG's", *kwargs)

if __name__ == "__main__":
    args_test("negative one", "zero", one="1", two="2")
