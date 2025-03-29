<?php
$array = [1, 2, 3, 2, 4, 2, 5];
$valueToRemove = 2;

foreach ($array as $key => $value) {
    if ($value === $valueToRemove) {
        unset($array[$key]); // удаление элемента 
    }
}

print_r($array);
