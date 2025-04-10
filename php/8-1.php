<?php


function hasAtMostTwoUppercase($str) {
    
    $count = 0;
    
    for ($i = 0; $i < strlen($str); $i++) {
        if (ctype_upper($str[$i])) {
            $count++;
            if ($count > 2) {
                return "В строке более 2 заглавных букв"; 
            }
        }
    }
    
    return "В строке не более 2 заглавных бука";
}


echo hasAtMostTwoUppercase('Hello World'); 
echo hasAtMostTwoUppercase('HELLO');    

?>
