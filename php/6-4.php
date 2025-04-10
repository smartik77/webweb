<?php


     function invertCase($str) {
        $chars = str_split($str);  // Разбиваем строку на массив символов
         
        $result = array_map(function($char) {
            if (ctype_upper($char)) {
                return strtolower($char);   // Меняем верхний регистр на нижний
            } else {
                return strtoupper($char);  // Меняем нижний регистр на верхний
            }
        }, $chars);
         
        return implode('', $result);  // Собираем массив обратно в строку
    }
    

    $input = 'AbCdE';
    echo invertCase($input); 


?>
