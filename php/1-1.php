<?php
    $string = "68796845305435340";
    // mb_strpos — Ищет позицию первого вхождения подстроки в строку
    $position = mb_strpos($string, '0');
    
    if ($position !== false) {
        echo "Первый '0' найден на позиции: " . $position; 
    } else {
        echo "Символ '0' не найден в строке.";
    }
?>
