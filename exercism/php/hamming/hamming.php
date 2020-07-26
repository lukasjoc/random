<?php

/**
 * distance
 *
 * @param string $strandA
 * @param string $strandB
 * @access public
 * @return int
 */
function distance(string $strandA, string $strandB) : int {

	$A = str_split($strandA);
	$B = str_split($strandB);
	
	if (count($A) !== count($B)) {
		throw new Exception(sprintf("strands must be equal lenght %s !== %s", json_decode($A),json_decode($B)));
	}

	$diff = 0;
	foreach($A as $a) {
		foreach($B as $b) {
			if ($a != $b){
				$diff += 1;
			}
		}
	}
	return $diff;
}
