<?php

$total = 0;
$answers = false;
$data = new SplFileObject('data.txt');

while (!$data->eof()) {
  $line = trim($data->fgets());

  if ($line) {
    $answers = $answers !== false ? array_intersect($answers, str_split($line)) : str_split($line);
  } else if ($answers !== false) {
    $total += count($answers);
    $answers = false;
  }
}

echo 'Total answers: ' . $total;
