<?php


  function formatNumber($str) {

        $reversed = strrev($str);  // strrev($str) переворачивает строку

        $chunks = str_split($reversed, 3);   // str_split($reversed, 3) разбивает её на части по 3 символа

        $chunks = array_map('strrev', $chunks);  // array_map('strrev', $chunks) переворачивает каждую часть
      
        $chunks = array_reverse($chunks);  // array_reverse($chunks) меняет порядок частей
      
        return implode(' ', $chunks);  // implode(' ', $chunks) соединяет элементы пробелами 
    }


    $input = '12345672';
    echo formatNumber($input); 


?>
