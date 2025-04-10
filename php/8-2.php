<?php

    function removeLongSubstrings($str) {
        $words = explode(' ', $str);  // Разбиваем строку на массив подстрок
        
        $filtered = array_filter($words, function($word) {
            return strlen($word) <= 3;  // Оставляем только подстроки длиной ≤3
        });
        
        return implode(' ', $filtered);   // Собираем обратно в строку
    }
    

    $input = '1 22 333 4444 22 5555 1';
    echo removeLongSubstrings($input); 

?>
