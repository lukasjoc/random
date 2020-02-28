#!/usr/bin/env node

const fs = require("fs")

let f = process.argv[2]
let content = fs.readFileSync(f).toString()
let lines = content.split("\n")

console.log(lines.length -1)
