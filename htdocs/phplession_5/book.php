<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Форма</title>
    <style>
        form div {
            margin-bottom: 20px;
        }
    </style>
</head>
<body>
<?php include 'get.php'?>
<?echo $book?>
<?php include_once 'include_require/header.php'?>
<h3>Название :<?php echo $book['title']?></h3>
<p><?echo $book['author']?></p>
<img src="img/<?php echo $book['img']?>" alt="">

</div>



</body>
</html>
