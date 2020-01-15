<?php




function makeRandomString($len) {
    $str = substr(str_shuffle("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"), 0, $len);
    return $str;
}

function generateRandomName(){
    $quan_words = rand(1,12);
    $name = makeRandomString($quan_words);
    return $name;
}

function create_folder($path){
    $name_folder = generateRandomName();
    mkdir($path+)
}


function create_folders(){

}

