<?php

    function uppercaseOddLetters($str) {
        $result = '';
        for ($i = 0; $i < strlen($str); $i++) {
            // Четные индексы (0, 2, 4...) считаем "нечетными позициями" 
            // .= Сложение строк
            $result .= ($i % 2 == 0) ? strtoupper($str[$i]) : $str[$i];
        }
        return $result;
    }


    $input = 'abcde';
    echo uppercaseOddLetters($input); 
?>
