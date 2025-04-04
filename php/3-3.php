<?php

    $string = '12,34,56';
    $numbers = explode(',', $string); // Разбиваем строку на массив
    $sum = array_sum($numbers); // Суммируем элементы массива
    
    echo "Сумма чисел: " . $sum;

?>
