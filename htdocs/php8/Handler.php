<?php

abstract class  Handler implements Ihandler{
    protected $source;
    protected $params = [];
    public function __construct($file)
    {
        $this->source = $file;
    }
    static public function getHandler(string $file_name)
    {
        $type = pathinfo($file_name, PATHINFO_EXTENSION);
        if(!$type){
            throw new Exception('Unknow Format');
        }
        $class_name = ucfirst(strtolower($type)) . 'Handler';//xml handler
        $path = $class_name . '.php';
        //$path =XMlHandler.php
        if(!file_exist($path)){
            throw new Exception('файл не существует');
        }
        require_once $path;
        if (!class_exists($class_name)){
           throw new Exception('файл не существует'); 
        }
        $obj = new $class_name($file_name);
        //obj = new XmlHanlder($file_name);
        if(!is_subclass_of($obj,'Ihandler')){
            throw new Exception("Error Processing Relationship");
        }
        return $obj;
    }
    function addParams($key, $value)
    {
        $this->params[$key] = $value;
    }
    function getParams()
    {
        return $this->params;
    }
}
?>
