<?php
    $str = "45150489840";
    $position = strpos($str, '0');
    
    if ($position !== false) {
        echo "Позиция первого нуля: " . $position;
    } else {
        echo "Ноль не найден";
    }

?>
