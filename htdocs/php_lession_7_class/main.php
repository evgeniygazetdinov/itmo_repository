<?php
require_once 'Article.php';
require_once 'Author.php';

$sania = new Author('sania',19);
$js = new Article($sania);
//$js ->title = 'Статья';
var_dump($js);
$html = new Article($sania);
//$html ->title = 3432;
//$js ->text = "JavaScript® (often shortened to JS) is a lightweight, interpreted, object-oriented language with first-class functions, and is best known as the scripting language for Web pages, but it's used in many non-browser environments as well.";
var_dump($html);
$js->setTitle('cтатья');
$js->setText("JavaScript® (often shortened to JS) is a lightweight, interpreted, object-oriented language with first-class functions, and is best known as the scripting language for Web pages, but it's used in many non-browser environments as well.");
var_dump($js);
?>
