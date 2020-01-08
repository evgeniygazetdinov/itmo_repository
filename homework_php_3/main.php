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

