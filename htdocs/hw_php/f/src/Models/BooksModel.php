<?php
class BooksModel
{
    public function getAllBooks(){
        return [[
            'id'=>1,
            'title'=>"PHP",
            "description"=>"Про PHP",
            'page_count'=>127
        ],
        [
            'id'=>2,
            'title'=>"HTML",
            "description"=>341,
            'page_count'=>132
        ],
        [
            'id'=>3,
            'title'=>"JS",
            "description"=>"ПРО js",
            'page_count'=>1
        ],


    ];
    }
    public function return_book($id)
    {
        $this->getAllBooks();
        return $this[$id];
    }
}
?>