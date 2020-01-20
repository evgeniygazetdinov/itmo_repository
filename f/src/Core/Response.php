<?php
namespace Itmo_test_repository\Web\Core;


Class Response
{
    private $body;
    private $headers;
    private $statusCode = 200;
    public function __construct($body='',
    $headers=[],$statusCode=200)
    {
        $this->setBody($body)->setHeaders($headers)->setStatusCode();
    }
    public function setBody($body)
    {
        $this->body =$body;
        return $this;
    }
    public function setHeaders($headers)
    {
        $this->headers = $headers;
        return $this;
    }
    public function setStatusCode($code)
    {
        $this->statusCode = $code;
        return $this;
    }

}
