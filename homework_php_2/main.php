<?php
echo 'Задание 1';
echo '<br>';

for($i=1;$i < 10; $i++){
    for($x=1;$x<10; $x++)
    echo $x * $i," ";
    echo "<br>";
     

};
?>
<?php

echo 'Задание 2';
?>
<form name="form" action="" method="get">
  <input type="text" name="subject" id="subject" value="Car Loan">
</form>
<?php
$x = $_GET['subject']; 
echo $x;
function calculate_y(){

}


?>