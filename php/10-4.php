<?php


    function hasConsecutiveDuplicates($array) {
        for ($i = 0; $i < count($array) - 1; $i++) {
            if ($array[$i] === $array[$i + 1]) {
                return "Есть два одинаковых элемента подряд"; 
            }
        }
        return "Нет двух одинаковых элементов подряд"; 
    }
    
    // Пример использования
    $arr = [1, 2, 3, 3, 4, 5];
    echo (hasConsecutiveDuplicates($arr));


?>
