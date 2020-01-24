<?php
#для текста
echo 'hi<br>';
#переменная
$login = 'qwe';
var_dump($login);
var_dump('isset', isset($login),'<br>');
var_dump('empty', empty($login),'<br>');


$auth = false;
var_dump('empty',empty($auth));
var_dump('isset',isset($auth));
/*
 * empty проверяет является ли переменная пустой (переменная не сущетвует ее значение null или false)
 * isset вернет true если значение у переменной есть кроме true
 *
 */

 #четыре типа даннхх
 /*
 boolean
 interger
 float
 string
*/

/*
array
object
callable
iterable

*/
/*два спец символа
resourse - дескриптор ресурсов
null
*/

echo"boolean";
/*
либо true
либо false
$login = (bool) $login;

*/
$login = (bool) $login;
echo"$login";
#проверка на тип is_bool
var_dump(is_bool($login));
#константа
var_dump(PHP_INT_MAX);