<?php
require_once __DIR__.
    "/../src/Models/BooksModel.php";
require_once __DIR__ .
    '/../src/Core/Controller.php';
require_once __DIR__ .
    '/../src/Controllers/IndexController.php';
require_once __DIR__ .
    '/../src/Core/Router.php';

$server = $_SERVER;
$uri = $server['REQUEST_URI'];

//if ($uri == '/') {
//    $controller = new IndexController();
//    $controller->indexAction();
//}
Router::run();
?>
