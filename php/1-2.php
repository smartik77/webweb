<?php
    for ($i = 1; $i < 1000; $i++) {
        $str = (string)$i;
        
        // Не испольльзуем числа в которых нет 2 цифр
        if (strlen($str) < 2) { continue; }
        
        if ((int)$str[0] + (int)$str[1] === 5) {
            echo $str . "\n";
        }
    }
?>
