<?php
namespace Itmo_test_repository\F\Core;

class Router
{
   private $dispatcher_func;
   public function __construct(array $urls)
   {
       $this->setOptions($urls);
   }
   public function setOption(array $urls)
   {
       return function (\FastRoute\RouteCollectior $r) use($urls)
       use ($urls)
       {
           foreach($urls as $name =>$data)
           {
               //BooksController::INdexACtion
               $arr = explode("::",$data['controller'],
               //$r->addRoute("GET",'/users, 'get_all_users)
               $r->addRoute($data['method'],$data['path'],
               [$arr[0],[$arr[1]]]))
           }
       }

   }
   public function dispatch($httpMethod, $url)
   {
       $dispatcher = \FastRoute\simpleDispatcher()
   }
}