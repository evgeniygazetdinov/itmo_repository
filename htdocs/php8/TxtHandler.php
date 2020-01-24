<?php
class TxtHandler extends Handler
{
    public function __construct($file)
    {
        parrent::__construct($file);
    }
    function read()
    {
        var_dump('чтение '+$this->source);
    }
    function write()
    {
        var_dump('запись '+$this->source);
    }
}