<?php


    $array = [1, 2, 3, 4, 5, 6];
    $result = [];
    
    for ($i = 0; $i < count($array); $i += 2) {
        $result[] = (int)($array[$i] . $array[$i + 1]);
    }
    
    print_r($result); 


?>
