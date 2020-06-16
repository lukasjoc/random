# -*- coding: utf-8 -*-
#!/usr/bin/env python3

import json
import codecs
from googletrans import Translator

def go(json: dict) -> dict:
  for k, v in json.items():
    if isinstance(v, dict):
      go(v)
    else:
      translation = translate_text(text=v, dest="en", src="de")
      json[k] = str(translation.text)
  return json

def translate_text(text: str, dest: str, src: str) -> list:
  t = Translator()
  return t.translate(text, dest, src)

if __name__ == "__main__":
  with open("de.json","r") as input_stream:
    data = json.load(input_stream)

  with codecs.open('en.json', 'w', encoding="utf-8") as output_stream:
    json.dump(go(data), output_stream, indent=4, sort_keys=True, ensure_ascii=False)

