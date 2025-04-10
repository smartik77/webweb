<?php


    $numbers = [123, 456, 789];
    $result = [];
    
    foreach ($numbers as $num) {
        $reversedStr = strrev((string)$num);  // strrev() переворачивает строку
        $result[] = (int)$reversedStr;  // (int) преобразует обратно в число
    }
    
    print_r($result); 


?>
