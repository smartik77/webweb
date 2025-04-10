<?php

    function getZeroPositions($str) {
        $positions = [];
        
        for ($i = 0; $i < strlen($str); $i++) {
            if ($str[$i] === '0') {
                $positions[] = $i;
            }
        }
        return $positions;
    }


    $str = '023m0df0dfg0';
    $result = getZeroPositions($str);
    print_r($result); 

?>
