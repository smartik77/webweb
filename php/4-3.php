<?php

    function countEvenDigits($number) {
        $number = abs($number);  // Обрабатываем отрицательные числа
        $count = 0;
        $numStr = (string)$number;  // Преобразуем число в строку
        
        for ($i = 0; $i < strlen($numStr); $i++) {
            $digit = intval($numStr[$i]);  // intval() конвертирует значение переменной в целое число. 1
            if ($digit % 2 === 0) {
                $count++; // Увеличиваем счетчик, если цифра четная
            }
        }
        
        return $count;
}


    $number = 1234567890;
    echo "Количество четных цифр: " . countEvenDigits($number); 
?>
