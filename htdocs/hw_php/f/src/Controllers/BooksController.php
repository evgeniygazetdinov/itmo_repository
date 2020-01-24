<?php


class BooksController extends Controller 
{
    public function __construct()
    {
        $this->book_model = new BooksModel();
    }
    public function indexAction()
    {
        $template = 'template.php';
        $content = 'books.php';
        $data = [
            'page_title'=>'Книги'
        ];
        echo $this->render_page($content,
            $template, $data);
    }
    public function showAction($id)
    {
        $template = 'template.php';
        $content = 'book.php';
        $book = $this->book_model->return_book($id);
        $data = [
            'page_title'=> $book['title'],
            'book'=> $book
        ];
        echo $this->render_page($content,
        $template, $data);
    }

}