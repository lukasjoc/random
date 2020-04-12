"use strict"

$(function(){
	$('#name').keyup(function(){
		$('#greet').text('Hello ' + $('#name').val())
	})
});


