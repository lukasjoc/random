"use-strict"

x = 1;
debug
(function() {
	if(!x) {
		console.log(5)
		debug;
		var x = 17
		debug;
	}else {
		console.log(42)
		debug;
	}
})()
