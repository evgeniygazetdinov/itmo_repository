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
<?php
$server =$_SERVER;
$request_method = $server['REQUEST_METHOD'];
if($request_method == "GET"){
  $get = $_GET;
  var_dump("CACACACACA");

$get = $_GET;
$id = $get['id'];
var_dump($id);
$id = $id - 1;
$city = $cities[$id];
}
?>






<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Путешествие в <?php echo city['title'];?></title>
  <link rel="stylesheet" type="text/css" href="css/style.css" />
</head>
    <h1>Путешествие в <?php $city['title']?> </h1>
    <div>
    </div>
<body>



</body>
</html>