<?php

    $array = [1, 2, 3, 4, 5, 6];
    $sumEven = 0; // Сумма элементов на четных позициях (позиции считаются с 1)
    $sumOdd = 0;  // Сумма элементов на нечетных позициях
    
    foreach ($array as $index => $value) {
        $position = $index + 1;   // Переводим индекс в позицию (начиная с 1)
        if ($position % 2 == 0) {
            $sumEven += $value;
        } else {
            $sumOdd += $value;
        }
    }
    
    // Вычисляем результат с проверкой деления на ноль
    $result = ($sumOdd != 0) ? $sumEven / $sumOdd : "Ошибка: сумма нечетных позиций равна нулю";
    
    echo "Результат: " . $result; 

?>
