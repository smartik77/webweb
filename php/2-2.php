<?php
    $array = [-1, 2, -3, -2, 4, 2, -5];

    foreach ($array as $key => $value) {
        if ($value < 0) {
            unset($array[$key]);
        }
    }

    print_r($array);
?>
