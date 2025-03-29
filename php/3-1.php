<?php
    $str1 = "slovo";
    $str2 = "olovo";

    $last1 = $str1[-1];
    $last2 = $str2[0];

    if ($last1 === $last2) {
        echo "Символы совпадают";
    } else {
        echo "Символы не совпадают";
    }
