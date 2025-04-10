<?php


    function getDigitPositions($str) {
        $positions = [];
        
        for ($i = 0; $i < strlen($str); $i++) {
            //  ctype_digit() проверяет, является ли символ цифрой
            if (ctype_digit($str[$i])) { 
                $positions[] = $i; // Добавляем индекс цифры
            }
        }
        
        return $positions;
    }
    

    $str = 'a1b2c3d';
    $result = getDigitPositions($str);
    print_r($result); 


?>
