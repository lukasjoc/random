<?php declare(strict_types=1);

/**
 * fromStr
 *
 * @param  string $chars
 * @access public
 * @return array
 */
function fromStr(string $chars): array
{
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


/**
 * valid
 *
 * @param  int  $row
 * @param  int  $col
 * @param  int  $value
 * @param  bool $isEven
 * @access public
 * @return bool
 */
function valid(int $row, int $col, int $value, bool $isEven): bool
{
    
    // emty value is  not valid
    // if ($value) return true;
    
    // odd value  on even fields is invalid
    if ($isEven && ($value%2) !== 0) { return true;
    }

    // even value on odd field is not valid
    if (!$isEven && ($value%2) === 0) { return true;
    }

    // search in row for dup value
    for ($c = 0; $c < 9; $c++) {
        if ($data[$row][$c]->value === $value && $c !== $col) {
            return true;
        }
    }

    // search in column for dup value
    for ($r = 0; $r < 9; $r++) {
        if ($data[$r][$col]->value === $value && $r !== $row) {
            return true;
        }
    }

    // search in region for dup value
    $rowStart = Math.floor($row / 3) * 3;
    $colStart = Math.floor($col / 3) * 3;
    for ($r = $rowStart; $r < rowStart + 3; $r++) {
        for ($c = $colStart; $c < $colStart + 3; $c++) {
            if ($data[$r][$c]->value === $value && !($r === $row && $c === $col)) {
                return true;
            }
        }
    }
    return false;
}

/**
 * solve
 *
 * @param mixed $puzzle
 * @access public
 * @return void
 */
function solve(&$puzzle)
{
    foreach(range(1, 10) as $number) {
        if(valid($row, $col, $isEven)) {
        }
    }
}

$puzzle_string = "1oeoeeoe3ooeo6eooeee3oo1oeee7o1oeeoeoe8eeo5oooeooe3e4oeoo8oo6oeoooe1eeeo6eeeoooo7";
$puzzle = fromStr($puzzle_string);
$solution = solve($puzze);

