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
echo('<br>');
echo 'Задание 2';
?>
<form name="form" action="" method="get">
  <input type="text" name="subject" id="subject" value="">
  <input type="submit" value="check button">
</form>
<?php
if($_GET){
    calculate_y(); 
};
function calculate_y(){

$x = $_GET['subject']; 
echo'<br>';
$y = ($x*0.1);
return $y;
}


?>


<?php
echo '<br>';
echo 'Задание 3';

function find_iteration(){
    $number = 800;
    $counter = 0;
    while($number >50){
        $number = $number /2;
        $counter+=1;
    }
    return $counter;
};
echo '<br>';
echo 'количество итераций при делении 800 на 2 через while';
echo '<br>';
echo find_iteration();

?>





<?php
echo ' задание 5';
$arr = [
    '1'=> [
        'price' => 10,
        'count' => 2
    ],
    '2'=> [
        'price' => 5,
        'count' => 5
    ],
    '3'=> [
        'price' => 8,
        'count' => 5
    ],
    '4'=> [
        'price' => 12,
        'count' => 4
    ],
    '5'=> [
        'price' => 8,
        'count' => 4
    ],
];
$result = krsort($arr,'price');
echo $result;
?>
