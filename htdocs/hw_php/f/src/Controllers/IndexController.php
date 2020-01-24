<?php

//файл - IndexController.php
class IndexController extends Controller
{ 
    public function indexAction()
    {
      
        $template = 'template.php';
        $content = 'main.php';
        $books =$this->books_model->getAllBooks();
        $data = [
            'page_title'=>'Главная',
            'all_books'=>$books,
        ];
        echo $this->render_page($content,
            $template, $data);
    }
}