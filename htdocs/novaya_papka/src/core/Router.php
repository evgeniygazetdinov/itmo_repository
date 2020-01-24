<?php

class Router
{
    public static function run()
    {
        $controller = 'index';
        $action = 'index';
        $params = 'null';
        $server = $_SERVER;
        $uri = $server["REQUEST_URI"];
        $routes = explode('/',$uri);
        if(!empty($routes[1])){
            $controller = $routes[1];
        }
        if(!empty($routes[3])){
            $params = $routes[3];
        }
        $controller = 
            ucfirst(strtolower($controller))."Controller";
            //booksCOntroler
        require_once __DIR__ ."/../Controllers/".$controller.'.php';
        $controller = new $controller();
        $action = strtolower($action).'Action';
        //actiom =allAction
        $controller->indexAction;

    }
}