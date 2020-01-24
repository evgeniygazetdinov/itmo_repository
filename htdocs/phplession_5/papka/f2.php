<?php
var_dump(getcwd());
copy('f.txt','f3.txt');

if(copy('f.txt','f3.txt')){
    echo 'копирование успещно';
}

rename('f3.txt','f3renamed.txt');
if(copy('f3.txt','f3renamed.txt')){
    echo 'перемена имени успешна';
}
//удаление файла

if (unlink('f3renamed.txt')){
    echo 'удаление произошло';
}

//новая папка 

mkdir('xaxa');
// удалить папку


function read_dir($dirname){
    echo 'here';
    if(is_dir($dirname)){
        echo 'yes';
    }
}

read_dir('papka');
?>