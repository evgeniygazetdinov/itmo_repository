<?php


function makeRandomString($len) {
    $str = substr(str_shuffle("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"), 0, $len);
    return $str;
}

function generateRandomName(){
    $quan_words = rand(5,12);
    $name = makeRandomString($quan_words);
    return $name;
}
function fill_folder()
{   $text_for_file = makeRandomString(rand(1000,10000));
    $filename = generateRandomName();
    $name_for_save = 
    $myfile = fopen(".txt", "a") or die("Unable to open file!");
    fwrite($myfile, "\n". $text_for_file);
    fclose($myfile);
}
function create_folder($path)
{
    $name_folder = generateRandomName();
    $create = $path . "/".$name_folder;
    mkdir($create);
    echo $create;
}


function create_folders()
{
    $path = getcwd();
    create_folder($path);
}

create_folders();
?>