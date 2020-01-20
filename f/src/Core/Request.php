<?php
namespace  Ifmo\Web\Core;

class Request
{
    private $get;
    private $post;
    private $files;
    private $server;
    private $params;

public function __construct()
{
    $this->get = $__GET;
    $this->post = $__POST;
    $this->files = $__FILES;
    $this->server = $_SERVER;
    $this->$params = getParams();
}
public function setParams($params)
{
    $this->params = $params;
}
public function getParams()
{
    return $this->params;
}
public function getMethod()
{
    return $this->server["REQUEST_METHOD"];
}
public function getUri()
{
    return $this->server["REQUEST_URI"]
}
public function get ()
{
    return $this->get;
}
public function post()
{
    return $this->post;
}
public function 
{
    
}
}