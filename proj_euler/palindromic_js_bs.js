#!/usr/bin/env node

function largestPalindrome() {
    let start = 100
    let limit = 999
    let max = 0
    for (let i = limit; i > start; i--) {
        for (let j = i; j > start; j--) {
            let mul = j * i;
            if (is_pal(mul) && mul > max) {
                max = i * j;
            }
        }
    }
    return max;

function is_pal(i) {
  i = "" + i
  return i === i.split("").reverse().join("")
}

}

console.log(largestPalindrome())
