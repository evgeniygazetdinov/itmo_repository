<?php
echo 'response';
//суперглобальный массив
//со всей инфой о запросе и сервере
$server = $_SERVER;
//var_dump($_SERVER);


$host = $server['HOST'];
var_dump($host);
$str_url = 'http://host?имя=МИХАИЛ&возраст=34';
var_dump(urlencode($str_url));//кодирует пробелы как плюсы 
var_dump(rawurlencode($str_url));// кодирует пробелы как %20

//разкодировка
var_dump(urldecode('https://translate.google.com/translate?hl=en&sl=auto&tl=ru&u=https%3A%2F%2Fwww.ibm.com%2Fdeveloperworks%2Flibrary%2Fl-twist1%2Findex.html'));


$data = [
    'name'=>'Mike',
    'age'=>58,
];
$url = 'http://host/page?'. http_build_query($data);
var_dump($url);
//'http://host/page?name=Mike&age=58' 


$request_method = $server['REQUEST_METHOD'];


if ($request_method == "GET"){
    $get = $_GET;
    console.log($get);
    
}