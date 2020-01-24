<?php
require_once "XmlHandler.php";
require_once "TxtHandler.php";
require_once "Interface_Handler.php";
require_once "Handler.php";

$handler = 'config.txt';
$handler = Handler::getHandler($file);
$handler->addParam('login','qwe');
$handler->addParam('pwd','123');
$handler->write(); 
