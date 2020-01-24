<?php
require_once __DIR__ .'/../src/Core/Controller.php';
require_once __DIR__ .'/../src/Core/IndexController.php';
require_once __DIR__ .'/../src/Core/Router.php';


$server = $_SERVER;
$uri = $server["REQUEST_URI"];
var_dump($uri);

/*
if($uri == '/'){
    $controller = new IndexController();
    $controller->indexAction();
}*/

Rounter::run()
?>