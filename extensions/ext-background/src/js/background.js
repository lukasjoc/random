"use strict"

const baseURL = "developer.chrome.com"
const color = "#3aa757"


chrome.runtime.onInstalled.addListener( function () {
	chrome.storage.sync.set({color: color}, function () {
		console.log(`The color of ${baseURL} is now ${color} a greeen`)
	})
	
	let dec = chrome.declarativeContent
	let gootooo = [{
			conditions: [new dec.PageStateMatcher({ pageUrl: {hostEquals: baseURL} }) ],
			actions: [new dec.ShowPageAction()]
	}]

	dec.onPageChanged.removeRules(undefined, function() {
		dec.onPageChanged.addRules(gootooo)
	})

})

