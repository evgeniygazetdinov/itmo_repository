<?php



echo('<br>');
echo 'Задание 1';
?>
<form name="form" action="" method="get">
  <input type="text" name="to_camel" id="subject" value="">
  <input type="submit" value="to camelcase">
</form>
<p>
result:
</p>
<?php
if($_GET){
    echo camelizing(); 
};
echo'<br>';

function camelizing($separator = '_')
{
    $input = $_GET['to_camel']; 
    return lcfirst(str_replace($separator, '', ucwords($input, $separator)));
}

echo('<br>');
echo 'Задание 2';
?>

<form name="form" action="" method="get">
  <input type="text" name="find_name" id="subject" value="">
  <input type="submit" value="findname from path">
</form>
<p>
result:
</p>
<?php
if($_GET){
    echo find_name_from_path(); 
};
function find_name_from_path(){
    $name = $_GET['find_name'];
    $file = basename($name); 
    return $file;
}
?>
<?php
echo('<br>');
echo 'Задание 3';
echo('<br>');
echo 'Сравнить два слова';
?>
<form name="form" action="" method="get">
  <input type="text" name="first_word" id="subject" value="">
  <input type="text" name="second_word" id="subject" value="">
  <input type="submit" value="to camelcase">
</form>
<p>
result:
</p>
<?php
if($_GET){
    echo compare_to_words(); 
};

function compare_to_words(){
    $first = $_GET['first_word']; 
    $second = $_GET['second_word']; 
    $first_arr = str_split($first);
    $second_arr = str_split($second);
    $len_for_compare =($strlen($first)>$strlen($second)?$first:$second);
    $counter = 0;
    for($x=0;$x<$len_for_compare;$x++){
        if($first_arr[x] === $second_arr[x]){
            $counter=+1; 
        }
    } 
    return $counter;
}
?>
<?php

echo 'задание 4';
echo'<br>';
function broke_digit($digit){
   $str = strval($digit);
   $array_with_words = str_split($str);
   $separated_digits = array();
   for($i=0;$i< count($array_with_words);$i++){
        array_push($separated_digits,(int)$array_with_words[$i]);
   }
   return $separated_digits;
}
function sum_numbers($array_with_digits){

    $sum = 0;
    for($i=0;$i<count($array_with_digits);$i++){
        $sum+=((int)$array_with_digits[$i]);   
    }
    return $sum;
}

function sum_and_sort_digits_in_array($arr){
    $broken_digits = array();
    $sum_digits = array();
    for($i=0;$i<count($arr);$i++){
        array_push($broken_digits,broke_digit($arr[$i]));
    }
    for($i=0;$i<count($broken_digits);$i++){
        array_push($sum_digits,sum_numbers($broken_digits[$i]));
    }
    sort($sum_digits);
    return $sum_digits;

}
$ar = [100, 13, 55];
var_dump($ar);
echo ('<br>');
echo 'sum and sorted';
echo ('<br>');
var_dump(sum_and_sort_digits_in_array($ar));

echo "Задание 5";
$ToLower = function($str) {
    return mb_strtolower($str); 
};

$ToUpper = function($str) {
    return mb_strtoupper($str); 
};

$FirstWordUpper = function($str) {
    $strArr = mb_split("\s", mb_strtolower($str));
    $newStrArr = [];
    for ($i = 0; $i < count($strArr); $i++) {
        $upWord = mb_convert_case($strArr[$i], MB_CASE_TITLE);
        array_push($newStrArr, $upWord);
    }
    return implode(" ", $newStrArr);
};

function stringConverter(string $str, callable $func){

    return $func($str);
}

$str = 'Cъешь ещё этих Мягких французских булок, Да выпей чаю';
var_dump(stringConverter($str, $ToLower));
var_dump(stringConverter($str, $ToUpper));
var_dump(stringConverter($str, $FirstWordUpper));

?>