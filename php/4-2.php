<?php

    function splitObject($object) {
        $result = [
            'keys' => [],
            'values' => []
        ];
        
        $props = get_object_vars($object);  //  get_object_vars() возвращает свойства указанного объекта в виде массива
        $result['keys'] = array_keys($props);   // array_keys() извлекает ключи из полученного массива

        $result['values'] = array_values($props);  // array_values() извлекает значения из полученного массива

        return $result;
    }

    // Исходный объект
    $obj = new stdClass();
    $obj->name = 'Alice';
    $obj->age = 25;
    $obj->city = 'London';

    $result = splitObject($obj);
    print_r($result['keys']);
    print_r($result['values']);
    
?>
