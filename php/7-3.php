<?php


    function removeOddDigits($number) {
        $str = (string)abs($number);  // Работаем с модулем числа
        $result = '';
        
        for ($i = 0; $i < strlen($str); $i++) {
            $digit = $str[$i];
            if ($digit % 2 == 0) {  // Проверяем чётность
                $result .= $digit;  // Добавляем только чётные цифры
            }
        }
        
        if ($result === '') return 0;  // Если не осталось цифр
        
        return (int)$result;
    }
    

    echo removeOddDigits(123789);  // 28


?>
