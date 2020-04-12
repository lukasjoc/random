"use strict"

let target = document.getElementById("changeColor")

// color the freaking button
chrome.storage.sync.get("color", function(data) {
	target.style.background = data.color
	target.setAttribute("value", data.color)
})

target.onclick = function(element) {
	let color = element.target.value;
  let parameters = {
		active: true,
		currentWindow: true
	}

	chrome.tabs.query(parameters, function(tabs) {
 		chrome.tabs.executeScript(
  		tabs[0].id,
      {code: `document.body.style.backgroundColor = "${color}"; `});
	});
};
