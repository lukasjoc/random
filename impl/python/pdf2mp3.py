#!usr/bin/python3
import os
import sys
from PyPDF3 import PdfFileReader
from gtts import gTTS
import argparse as ap
from tqdm import tqdm

class Converter:
    def __init__(self, inputPath, outputPath, lang):
        self.inputPath = inputPath
        self.outputPath = outputPath
        self.lang = lang

    """
    Prepare reading the PDF file and transforms it into a raw text file. Then the raw
    text file is read again for data cleaning purposes.
    """
    def prepare(self):
        # Process PDF input file to raw text file
        with open(self.inputPath, "rb") as fh:
            reader = PdfFileReader(fh)
            for page in tqdm(range(0, reader.numPages)):
                page_text = reader.getPage(page).extractText()
                print("Reading page", page, "of", reader.getNumPages())
                filename = join_paths("./.TXT", hash(self.inputPath))
                with open(filename, "a") as fh:
                    fh.write(page_text)

        # Cleaning the TEXT file for better processing
        with open(filename, "r") as fh:
            lines = fh.readlines()
            lines = [l.replace("\n", "").replace("\r", "") for l in lines]
        with open(filename, "w") as fh:
            fh.writelines(lines)
            print("Cleaning... => ", filename)
        self.transform(filename)

    """
    Transform processes the TEXT file into an .mp3 file,
    it uses the google-translate tts engine with custom
    configs given as argument flags
    """
    def transform(self, filename):
        with open(filename, "r") as fh:
            print("Processing(This could take a while..)... => ", filename)
            data = fh.read()
            tts = gTTS(text=data, lang=self.lang)
            tts.save(self.outputPath)
"""
join_paths joins 2 strings together after pushing them into a list
then returns the joined result as a single raw string of text.
"""
def join_paths(s1, s2):
    strings = [str(s1), str(s2)]
    joined = ""
    for string in strings:
        joined += string
    return joined

if __name__ == '__main__':
    parser = ap.ArgumentParser()
    parser.add_argument("--pdf", type=str, help="input pdf file")
    parser.add_argument("--o", type=str, help="output file")
    parser.add_argument("--lang", type=str, help="input language (pdf language) ")
    args = parser.parse_args()

    yes = {'yes','y', 'ye', ''}
    no = {'no','n'}

    if len(sys.argv) ==0:
        sys.stdout.write("You have to provide a pdf file, a source language  and an output path/file")

    choice = input("You want to do that? Takes a long time.. Just sayn .. ;) [y/N] ").lower()
    if choice in yes:
        converter = Converter(args.i, args.o, args.lang)
        converter.prepare()
    elif choice in no:
         sys.exit()
    else:
        sys.stdout.write("Please respond with 'yes' or 'no'")

