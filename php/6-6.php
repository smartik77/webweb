<?php


    $str = 'aaa bbb ccc eee fff';
    $words = explode(' ', $str);  // explode(' ', $str) разбивает строку на массив слов.
    
    foreach ($words as $key => $word) {
        if ($key % 2 != 0) {  // Обрабатываем каждый второй элемент (индексы 1, 3, 5...)
            $words[$key] = ucfirst($word);  // ucfirst() делает первую букву заглавной
        }
    }
    
    $result = implode(' ', $words);  // implode(' ', $words) собирает массив обратно в строку.
    echo $result; 


?>
