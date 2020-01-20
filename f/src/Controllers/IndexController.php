<?php
namespace Itmo_test_repository\F\Controllers;

use Itmo_test_repository\f\Core\Controller;

class IndexController extends Controller
{
    public function indexAction()
    {
        $template = 'template.php';
        $content = 'main.php';
        $data = [
            'page_title'=>'Главная'
        ];
        echo $this->render_page($content,
            $template, $data);
    }
}