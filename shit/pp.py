#!/usr/bin/env python3
# given an arbitrary data structure = ["c", "b", (1,2,3), [False, {}, [True, True]]]
# define text(t: str) -> output string
# define line() -> line watcher -> possibility of a line break 
# define group(doc: str) -> subgroup
# define emty() -> emty structure
# define nest(doc: str, indent: int) -> nesting watcher -> take doc and indent in a pre configured way
# define pretty(doc: str, width: int) -> as overall function handle to print pretty


# result
string_template = ""
trailing = ","

# return indent
def indent(indent: int) -> str:
  indent_str = ""
  for i in range(indent):
    indent_str += " "
  return indent_str

def pretty(strc: any) -> str:
  print(strc)

if __name__ == "__main__":
    pretty(["c", "b", (1,2,3), [False, {}, [True, True]]])
