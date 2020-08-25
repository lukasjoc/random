#!/usr/local/bin/node

const promise = new Promise(resolve => setTimeout(resolve, 5000))

(async function () {
	await (async function (){
		await promise
		console.log("A")
	})()
	console.log("B")
})();

(async function () {
	await promise
	console.log("C")
})();


