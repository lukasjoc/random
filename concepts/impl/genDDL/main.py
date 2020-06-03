#!/usr/local/bin/env python3

"""

genDDL is a very simple DDL-Code Generator

In the future this can be used to generate Databases and or testfiles with testdata
it was built by me to generate testdata fast to test and train new skills and features in projects
or have data to display to an audience respecting data security and savety. 🤘
Tho the first MVP release will just be a DDL Database Generator that can generate mysql and postgres database ddl descriptions

DDL TEMPLATE:
CREATE TABLE IF NOT EXISTS {table name} (
    {field} {type} {options},
);

# THIS IS JUST A PROTOTYPE. I WILL REWRITE THIS WITH RUST AND IT WILL BE MUCH NICER AND FASTER AND BETTER TESTED :=)
"""

import yaml
from collections import namedtuple 

class Parser():
    def __init__(self, path):
        self.path = path

    def parse_yml(self):
        """ Parse YML File into local dict and return data"""
        with open(self.path, "r") as stream:
        
            try:
                return yaml.safe_load(stream)
            except yaml.YAMLError as err:
                return err

class Generator():
    def __init__(self, stream):
        self.stream = stream

    def to_ddl(self):
        stream_keys = sorted(self.stream.keys())
        stream = namedtuple("stream", stream_keys)
        data = stream(**self.stream)
        print(data["test_table"])

def main():
    parser = Parser(path="./define.yml")
    data = parser.parse_yml()

    generator = Generator(stream=data)
    ddl = generator.to_ddl()


if __name__ == "__main__":
    main()
