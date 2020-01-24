<?php

$filename = '1.php';
$data = file_get_contents($filename);
var_dump($data);


// чтение из файла в массив
$arr = file($filename,FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
var_dump($arr);
function read_file_fread($filename){
    $fp = fopen($filename,'r');
    //$content = fread($fp,filesize($filename));
    $content = null;
    while(!feof($fp)){
        $content .= fread($fp, 1024); 
    }
    fclose($fp);
    return $content;
}
var_dump(read_file_fread('1.php')); 

function write_file($filename, $data){
    $fp = fopen($filename,'a');
    fwrite($fp, $data);
    fclose();
}
write_file('somedir/file1.txt','6666');





?>
