<?php


    $number = 123456;
    $str = (string)$number;  
    $sum = 0;
    

    for ($i = 0; $i < strlen($str); $i += 2) {
        // Берем пару символов и добавляем к сумме
        $sum += (int)substr($str, $i, 2);
    }
    
    echo $sum; 

?>
