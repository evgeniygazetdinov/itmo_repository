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
function content_for_folder($path_for_create)
{   $text_for_file = makeRandomString(rand(1000,10000));
    $filename = generateRandomName();
    var_dump($path_for_create);
    var_dump($path_for_create . '/'. $filename .'.txt');
    $name_for_save = $filename .'.txt'; 
    $myfile = fopen($name_for_save, "a") or die("Unable to open file!");
    fwrite($myfile, "\n". $text_for_file);
    fclose($myfile);
}
function create_folder($path)
{
    $name_folder = generateRandomName();
    $create = $path . "/".$name_folder;
    mkdir($create_path);
    return  $create_path;
}


function create_folder_with_content()
{
    $path = getcwd();
    $folder_for_fill = create_folder($path);
    $fill_forlder = content_for_folder($folder_for_fill);
}

function create_folders()
{
    $quant_dir = rand(5,12); 
    for($i=0;$i<$quant_dir;$i++)
    {
        create_folder_with_content();
    }
}
create_folder_with_content();
//create_folders();
?>