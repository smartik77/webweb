<?php

    function hasAtMostThreeLetters($str) {
        $count = 0;
        
        for ($i = 0; $i < strlen($str); $i++) {
            if (ctype_alpha($str[$i])) {
                $count++;
                if ($count > 3) {
                    return  "Больше трех букв "; 
                }
            }
        }
        return "Букв не более трех";
    }


    echo hasAtMostThreeLetters('a1b2c3'); 
    echo hasAtMostThreeLetters('Hello42'); 

?>
