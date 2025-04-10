<?php


    function getCharCase($char) {
        if (strlen($char) === 0) {
            return "Ошибка: пустая строка";
        }
        
        $firstChar = $char[0];   // Берем первый символ
        
        if (!ctype_alpha($firstChar)) {
            return "Символ '$firstChar' не является буквой";
        }
        
        return ctype_upper($firstChar) ? "Символ '$firstChar' в верхнем регистре" : "Символ '$firstChar' в нижнем регистре";
    }


    echo getCharCase('A');  // Символ 'A' в верхнем регистре
    echo getCharCase('z');  // Символ 'z' в нижнем регистре
    echo getCharCase('3');  // Символ '3' не является буквой
    echo getCharCase('!');  // Символ '!' не является буквой


?>
