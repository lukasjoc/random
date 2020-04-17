#!/usr/bin/env python3
import json

iterables = dict, list, tuple
# return indent
def c_indent(indent):
  indent_str = ""
  for i in range(indent):
    indent_str += " "
  return indent_str

# return quotes style

def create_tree(obj):
  data, data["obj"] = {}, []
  for i in obj:
    if type(i) in iterables:
      if type(i) == dict:
        for dv, dk in i.items():
          data["obj"].append({
            "elem": f"{dv}:{dk}",
            "type": f"{type(i)}"
          })
      else:
        data["obj"].append({
          "elem": f"{i}",
          "type": f"{type(i)}"
        })
    else:
      data["obj"].append({
        "elem": f"{i}",
        "type": f"{type(i)}"
      })

  """DEBUG"""
  with open("./data.json", "w") as writer:
    json.dump(data, writer)
  """DEBUG"""

  return data["obj"]

def prettier(obj, indent, nl="\n", trailing=","):
  obj_template=""
  b = "["
  be = "]"
  indent = c_indent(indent=indent) # set indent accrodingly
  obj_data= create_tree(obj) # local data from tree

  for obj_elem in obj_data:
      obj_template += f"{nl}{indent}{obj_elem['elem']}{trailing}"
  return f"{b}{obj_template}{nl}{be}"

if __name__ == "__main__":
  obj = [('abc','def'),1313,1313,'abc','def', {'1':{'1':{'1':{'1':'1'}}}, 1:(1,2,4,5)}]
  # obj = [ { 'negative':-4, 'positive': 42, 'floating':0.2131, 'tuple':(1,2,3,4,5)}, False, True, ['longsin','ans42',[],{}] ]
  print( prettier( obj, indent=2) )
