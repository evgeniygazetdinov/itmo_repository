<?php
declare(strict_types=1);
//файл Article.php
// класс - набор свойств и методов, имеющих
// общую, целостную, строго определенную сферу
// ответственности

class Article {
    // описание класса
    // public открытый доступ к свойству / методу
    // public свойство или метод доступны
    // из любого контекста
    // свойства (атрибуты)
//    public $title;
//    public $text;
//    public $date;
// private свойства и методы доступны только
// внутри класса
    private $title;
    private $text;
    private $date;
    private $author;

    public function __construct(Author $author)
    {
        $this->date = new DateTime();
//      ссылка на объект Author
        $this->author = $author;

    }

    public function getAuthor() {
        return $this->author;
    }
    // методы - функции, объявленные внутри класса
    public function setTitle(string $title)
    {
        if (strlen($title) < 4){
            throw new InvalidArgumentException("Ошибка ввода");
        }
        // $this -  ссылка на текущий объект
        $this->title = $title;
    }
    public function getTitle():string
    {
        return $this->title;
    }

    public function getText():string
    {
        return $this->text;
    }

    public function setText($text)
    {
        if (strlen($text) < 10){
            throw new InvalidArgumentException("Ошибка ввода");
        }
        $this->text = $text;
    }

    public function getFormatDate():string
    {
        return $this->date->format('Y-m-d H:i');
    }
}

