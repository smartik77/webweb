<?php

    function removeEveryThirdChar($str) {
        $result = '';
        
        for ($i = 0; $i < strlen($str); $i++) {

            // Если позиция кратна 3 то пропускаем
            // Во всех других случаях присоединяем символ к новой строке 
            if (($i + 1) % 3 !== 0) {
                $result .= $str[$i];
            }
        }
        
        return $result;
    }


    $input = 'abcdefg';
    echo removeEveryThirdChar($input); 

?>
