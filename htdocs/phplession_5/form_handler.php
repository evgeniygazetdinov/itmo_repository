<?php
$post = $_POST;
var_dump($post);
$files = $_FILES;
var_dump($files);
$file_name = $files['picture']['name'];
$ext = pathinfo($filename,PATHINFO_EXTENSION);
$name = md5($file_name);//+dataa
var_dump($name);
$full_name = $name+ '.' +$ext;
//перемещение из временной папки
$tmp_name = $files['picture']['tmp_name'];
var_dump('fullname',$full_name);
var_dump($tmp_name);
if(move_uploaded_file($tmp_name,'img/$fullname')){
    echo "успешно";
}
else{
    echo 'Не успешно';
}