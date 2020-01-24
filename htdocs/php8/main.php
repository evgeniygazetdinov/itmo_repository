<?php
// main.php

require_once 'Author.php';
require_once 'Article.php';

$auth = new Author('Jhon', 190);

// объекты создаются на основе
// заранее определенных классов
// с помощью оператора new

// создание объекта типа Article
$js = new Article($auth); // вызов конструктора
// зададим значения свойств объекта
// для доступа к свойствам и методам объекта
// используется ->
/*$js->title = '';
$js->text = 'зададим значения свойств объекта для доступа к свойствам и методам объекта';*/

$js->setTitle('Статья о JS');
var_dump('Название статьи $js'
    . $js->getTitle());
var_dump($js);

// создание другого объекта
$html = new Article($auth);
/*$html->title = 64757598;
$html->text = 'объекты создаются на основе заранее определенных классов с помощью оператора new';*/
$html->setTitle('HTML5');
var_dump('Название статьи $html'
    . $html->getTitle());
var_dump($html);
var_dump($html->getFormatDate());

$jsName=$js->getAuthor()->getName();
var_dump($jsName);