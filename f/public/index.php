<?php
require_once __DIR__ . '/../vendor/autoload.php';
$config = __DIR__ ."/../config.json";
$config= json_decode(file_get_contents($config,true));
var_dump($config);