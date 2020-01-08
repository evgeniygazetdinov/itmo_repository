<?php



echo('<br>');
echo 'Задание 1';
?>
<form name="form" action="" method="get">
  <input type="text" name="subject" id="subject" value="">
  <input type="submit" value="check button">
</form>
<?php
if($_GET){
    camelizing(); 
};
echo'<br>';

function camelizing($separator = '_')
{
    $input = $_GET['subject']; 
    return lcfirst(str_replace($separator, '', ucwords($input, $separator)));
}

