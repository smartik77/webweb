<?php
    $array = [-1, 2, -3, -2, 4, 2, -5];

    $counter = 0;
    
    foreach ($array as $key => $value) {
        if ($value < 0) {
            $counter++; 
        }
    }
    
    echo $counter;
?>
