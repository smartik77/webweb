<?php
    function getFirstDigitPosition($str) {
        for ($i = 0; $i < strlen($str); $i++) {
            if (is_numeric($str[$i])) {
                return $i;   // Позиция первой цифры
            }
        }
        return 'Цифр в стоке нет';   
    }


    $string = 'abcfsdf';
    $position = getFirstDigitPosition($string);
    echo $position; 
?>
