<?php


    function convertShortWords($str) {
        $words = explode(' ', $str);  // explode(' ', $str) — разбивает строку на массив слов
        
        foreach ($words as &$word) {
            if (strlen($word) <= 3) {
                $word = strtoupper($word);  // strtoupper() преобразует строку в верхний регистр.
            }
        }
        
        return implode(' ', $words);  // implode(' ', $words) собирает массив обратно в строку.
    }
    

    $input = 'a bc def ghij';
    echo convertShortWords($input); 


?>
