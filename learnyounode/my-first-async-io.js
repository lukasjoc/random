#!/usr/bin/env node

const fs = require("fs")
let lines = undefined

function getNL(cb) {
  fs.readFile(process.argv[2], (c, err) => {
    lines = c.length -1
    return lines
  })
}

