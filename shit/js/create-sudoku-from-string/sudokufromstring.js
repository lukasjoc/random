#!/usr/local/bin/node


function toString(sstr)  {
	sudokudata = []
	sstr_array = sstr.split("")
	
	sstr_array.forEach(e => () {

		element = {
			"value": e,
			"isEven": 
		}

	})
	
	return sudokudata
}


let puzzle = "672819345193..4862485..3197824137659761945283359...714.38..1426.174.6.38.463...71"
console.log(toString(puzzle))

