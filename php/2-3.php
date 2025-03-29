<?php
    $str = "string";
    
    $length = mb_strlen($str); 
    
    if ($length >= 2) {
        $newStr = mb_substr($str, 0, -2) . mb_substr($str, -1);  // Обрезаем строку от 0 до -2 символа и прибавляем последний        
        echo $newStr; 
    }
?>
