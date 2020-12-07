<?php

preg_match_all('/(?:(a|a\n)|(b|b\n)|(c|c\n)|(d|d\n)|(e|e\n)|(f|f\n)|(g|g\n)|(h|h\n)|(i|i\n)|(j|j\n)|(k|k\n)|(l|l\n)|(m|m\n)|(n|n\n)|(o|o\n)|(p|p\n)|(q|q\n)|(r|r\n)|(s|s\n)|(t|t\n)|(u|u\n)|(v|v\n)|(w|w\n)|(x|x\n)|(y|y\n)|(z|z\n))*\n\n/m', file_get_contents('data.txt') . "\n\n", $matches, PREG_SET_ORDER, 0);

$total = 0;
foreach ($matches as $match) {
  $total += array_reduce($match, function ($acc, $val) { return strlen(trim($val)) === 1 ? $acc + 1 : $acc; }, 0);
}

echo 'Total answers: ' . $total;
