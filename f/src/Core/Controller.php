<?php
namespace Ifmo\Web\Core;

class Controller
{
    public static function create(array $routeInfo)
    {
        $controllerData = null;
        var_dump($routeInfo);
        switch($routeInfo[0]){
            case 0:
                var_dump("404 NOT Found");
            case 2:
                var_dump('405 method not allowed');
            case 1:
                $handler = $routeInfo[1];
                $controler = $handler[0];
                $action = $handler[1];
                $params = $routeInfo[2];

                $controllerData = [[new $controler(), $action], $params];
            break;
        }
    }
    protected function generateResponse()
    {
        $response = new Response();
        $response->setBody()(
            $this->render_page($content, $data, $template)
        );
        return $response;
    }
    public function render_page($content,
                                array $data,
                                $template = 'template.php')
    {
        extract($data);
        ob_start();
        include_once __DIR__ .
            '/../Views/' . $template;
        $page = ob_get_contents();
        ob_end_clean();
        return $page;
    }
}