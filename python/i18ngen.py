#!/usr/local/bin/python3
#-*- coding: utf-8 -*-

import json
import codecs
import argparse as ap
from tqdm import tqdm
from googletrans import Translator, LANGUAGES

def go(json, src_lang, dest_lang):
    for k, v in tqdm(json.items()):
        if isinstance(v, dict):
            go(v, src_lang, dest_lang)
        else:
            translation = translate_text(text=v, src=src_lang, dest=dest_lang)
            json[k] = str(translation.text)

    return json

def translate_text(text, dest, src):
    t = Translator()
    return t.translate(text, dest, src)

if __name__ == "__main__":
    parser = ap.ArgumentParser()
    parser.add_argument("--file", type=str, help="source file")
    parser.add_argument("--src", type=str, help="source language")
    parser.add_argument("--dest", type=str, help="dest language")
    args = parser.parse_args()

    with open(args.file, "r") as input_stream:
        data = json.load(input_stream)

    dest_file = f"{args.dest}.json"
    with codecs.open(dest_file, "w", encoding="utf-8") as output_stream:
        json.dump(go(data, args.src, args.dest), output_stream, indent=4, sort_keys=False, ensure_ascii=False)

