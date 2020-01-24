<?php
$server = $_SERVER;
$request_method = $server['REQUEST_METHOD'];

if($request_method ==='POST'){
$post = $_POST;
//var_dump($post);
echo "form aceept";
}