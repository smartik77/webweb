<?php
    $array = [1, 2, 3, 4, 5, 6];
    
    // Разделяем массив на две половины
    $half = count($array) / 2;
    $firstHalf = array_slice($array, 0, $half);
    $secondHalf = array_slice($array, $half);

    $sumFirst = array_sum($firstHalf);
    $sumSecond = array_sum($secondHalf);
    
    if ($sumSecond != 0) {
        $result = $sumFirst / $sumSecond;
        echo "Результат: " . $result;
    } else {
        echo "Деление на 0 невозможно";
    }
