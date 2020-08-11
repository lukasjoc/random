<?php declare(strict_types=1);

class Solver {

	public $puzzle = [];

	function __construct(string $str) {
		if(strlen($str) !== 81) {
			throw new \Exception('Errggor sudoku');
		}
		$this->puzzle = $this->fromStr($str);
	}
	
	function fromStr(string $chars): array {
		$arr = [];
		$chars_arr = str_split($chars);
		foreach ($chars_arr as $chk => $ch) {
			$arr_item = [
				"value" => ($ch === "e" || $ch === "o") ? "" : intval($ch),
			 	"isEven" => ($ch === "e" || ( $ch !== "o" && (intval($ch) % 2) === 0 )  )? true :false,
			 	"isOriginal" => ($ch === "e" || $ch === "o") ? false : true,
			 ];
			 array_push($arr, $arr_item);
		}
		return array_chunk($arr, 9);
	}

	function valid(int $row, int $col, int $value, bool $isEven): bool {

		// check value scope first
		if ($isEven && ($value%2) !== 0) return false;
		if (!$isEven && ($value%2) === 0) return false;
	
	  // check row
		foreach (range(0, 8) as $r) {
			if ($this->puzzle[$row][$r]["value"] === $value) return false;
	  }

		// check col
		foreach (range(0, 8) as $c) {
			if ($this->puzzle[$c][$col]["value"] === $value) return false;
		}
	
		// check region
		$x = (int) ((int)($row/3)*3);
    $y = (int) ((int)($col/3)*3);
		foreach(range(0, 2) as $i) {
			foreach(range(0, 2) as $j) {
				if($this->puzzle[$i+$x][$j+$y]["value"] === $value) return false;
			}
		}
	
		return true;
	}

	function hasEmty($row, $col) {
		foreach(range(0, 8) as $row) {
			foreach(range(0, 8) as $col) {
				if($this->puzzle[$row][$col]["value"] == "") return true;
			}
		}
		return false;
	}
	
	function solve() {
		foreach(range(0, 8) as $row) {
			foreach(range(0, 8) as $col) {
				if(!$this->hasEmty($row, $col)) return true;
					if ($this->puzzle[$row][$col]["value"] == "") {
						foreach(range(1, 9) as $n) {
							if($this->valid($row, $col, $n, $this->puzzle[$row][$col]["isEven"])) {
								$this->puzzle[$row][$col]["value"] = $n;
								if ($this->solve()) return true;
								$this->puzzle[$row][$col]["value"] = "";
							};
						}
						return false;
					}
				}
			}
		}
}

// DRIVER CODE
$sudoku_string = "1oeoeeoe3ooeo6eooeee3oo1oeee7o1oeeoeoe8eeo5oooeooe3e4oeoo8oo6oeoooe1eeeo6eeeoooo7";
$solver = new Solver($sudoku_string);
$solution = $solver->solve();
printf("%s", json_encode($solver->puzzle, JSON_PRETTY_PRINT));
