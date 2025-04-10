<?php

    $arr1 = [1, 2, 3];
    $arr2 = ['a', 'b', 'c'];
    
    $result = array_merge( array_slice($arr1, 0, 2), $arr2, array_slice($arr1, -1)  );
    
    print_r($result); 

?>
