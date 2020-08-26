#!/usr/bin/env node

function sum(values){
  let sum = 0
  values.forEach((item, index) => {
    sum += parseInt(item)
  })
  return sum
}

let args = process.argv.slice(2)
console.log(sum(args))

