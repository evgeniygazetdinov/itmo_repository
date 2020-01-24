<?php

class Article{
    private $title;
    private $text;
    private $data;
    private $author;


    public function __construct(Author $author){
        $this->date = new DateTime();
        $this->author = $author;
    }



    public function setTitle(string $title){
        if(strlen($title)< 4){
            throw new InvalidArgumentException('ошибка ввода');
            
        }
        $this ->title = $title;
    }
    public function getTitle(){
        return $this->text;
    }



    public function setText(string $text){
        if(strlen($text)< 4){
            throw new InvalidArgumentException('ошибка ввода');
            
        }
        $this ->text = $text;
    }
    public function getText(){
        return $this->text ;
    }

};
