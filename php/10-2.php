<?php

    function getFirstEvenDigitFromEnd($number) {
        $number = abs($number);  // Работаем с модулем числа
        $str = (string)$number;
        
        // Перебираем цифры с конца
        for ($i = strlen($str) - 1; $i >= 0; $i--) {
            $digit = (int)$str[$i];
            if ($digit % 2 == 0) {
                return $digit;  // Возвращаем первую найденную чётную цифру
            }
        }
        
        return "Чётных цифр нет"; 
    }
    
    // Примеры использования
    echo getFirstEvenDigitFromEnd(1234567);  
    echo getFirstEvenDigitFromEnd(13579);    
    echo getFirstEvenDigitFromEnd(-24680);   
    echo getFirstEvenDigitFromEnd(0);    

?>
