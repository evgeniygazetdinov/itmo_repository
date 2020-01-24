


<?php
$server =$_SERVER;
$request_method = $server['REQUEST_METHOD'];
if($request_method == "GET"){
  $get = $_GET;
  var_dump("CACACACACA");
}?>
<?php
$auth = true;
$login = 'qwerty';
$cities = [
    [
      'id'=>1,
      'title'=>'Париж',
      'cost'=>4526,
      'img'=>'1.jpg'
    ],
    [
    'id'=>2,
    'title'=>'Санкт-Петербург',
    'cost'=>324,
    'img'=>'2.jpg'
    ],
    [
    'id'=>3,
    'title'=>'Рига',
    'cost'=>335,
    'img'=>'3.jpg'
    ],
]
?>
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>my super form</title>
</head>
<body>
<?php
foreach($cities as $city):
  ?>
  <div>
    <h3>Путешевствие в <?php echo $city['title'];?></h3>
    <h3>стоимость <?php echo $city['cost'];?></h3>
    <a href="../phplession_4/city.php?id<?php echo $city['id']?>">

    <img width="600" height="200" src="img/<?php echo $city['img'];?>" alt="">
    </a>

  </div>
<?php endforeach;?>
</body>
</html>
