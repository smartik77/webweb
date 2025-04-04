<?php
    $str = "451504809840";

    $count = 0;
    $position = 0;
    
    for ($i = 0; $i < strlen($str); $i++) {
        if ($str[$i] === '0') {
            $count++;
            if ($count === 3) {
                $position = $i;
                break;
            }
        }
    }
    
    if ($count === 3) {
        echo "Позиция третьего нуля: " . $position;
    } else {
        echo "В строке менее трех нулей";
    }

?>
