"use strict"

// const ColorThief = require('colorthief');
// import ColorThief from './node_modules/colorthief/dist/color-thief.mjs'
// import Color

et image = `https://i.ytimg.com/vi/dymuNM4foQM/hqdefault.jpg`


const colorThief = new ColorThief();
// let img = document.querySelector('img');
colorThief.getColor(image);


// let wowE = document.getElementById("wow")
// wowE.innerHTML = color

// const rgbToHex = (pallete) => "#" + [...pallete].map(x => {
//	const hex = x.toString(16)
//	return hex.length === 1 ? "0" + hex : hex
// }).join("")
//
// ColorThief.getColor(image)
//	.then(color => {
//		let hexColor = rgbToHex(color)
//		console.log(hexColor)
//	})
//	.catch(err => { console.log(err) })
//
//
// const Vibrant = require('node-vibrant')
//
// function getVibrantColor(image) {
//	Vibrant.from(image).getPalette((err, palette) => console.log(palette))
// }
//
// let vObj= getVibrantColor(image)
//
//
// console.log(vObj)
// let colors = vObj.Vibrant.Swatch.rgb

// let hexVV = rgbToHex(colors)
// console.log("Vibrant: ", hexVV)


