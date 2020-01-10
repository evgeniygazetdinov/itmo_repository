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
function broke_digit($digit){
    $str = (string) $digit;
    //TODO think about save digit
    $for_plus = (int) explode('',$str);
    return 1;
}

function sum_and_sort_digits_in_array($arr){
    $for_sort = array();
    for($i=0;$i<count($arr);$i++){
        array_push($for_sort,broke_digit($arr[$i]));
    }
}