<?php
    $array = [7, 1, 5, 3, 4, 5, 6];
    
    $halfArrayLen = count($array) / 2;
    $sum = 0;
    
    for ($i = 0; $i < $halfArrayLen; $i++) {
       $sum +=  $array[$i];
    }

echo $sum;
