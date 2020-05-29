#!/usr/bin/env python3

from flask import Flask
import escape
import requesta

# setting app as __name__ var
app = Flask(__name__)

@app.route("/")
def greet():
  name = requests.args.get("name","World")
  return f"Hello, {escape(name)}!"
