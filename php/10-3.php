<?php
    $str = 'abcde abcde abcde';
    $words = explode(' ', $str);

    //array_walk() —  применяет заданную функцию к каждому элементу массива
    array_walk($words, function(&$word) {
        if ($word !== '') {
            $word = '!' . substr($word, 1);
        }
    });
    
    $result = implode(' ', $words);
    echo $result; // !bcde !bcde !bcde

?>
