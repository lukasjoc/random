#!/usr/local/bin/node

const init = ({x = {}} = {}) => x

console.log(init(), typeof(init()))
