<?php

function sumArray($numbers)
{
  $sum = 0;
  for ($i = 0; $i < count($numbers); $i++) {
    $sum += $numbers[$i];
  }
  return $sum;
}

echo sumArray([1, 2, 3, 4, 5, 5]) . "\n"; // Вывод: 15

echo sumArray([-1, 0, 1]) . "\n"; // Вывод: 0
echo sumArray([1, 5]) . "\n"; // Вывод: 6
