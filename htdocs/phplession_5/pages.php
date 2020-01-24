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
<? foreach($books as $value): ?>
<div>
<h3>Книга <? echo $value['title'] ?></h3>
<h6>Автор <? echo $value ['author'] ?></h6>
<p>Cтоимость <? echo $value['price']?></p>
<a href="book.php?id=<? echo $value['id']?>"></a>
end
</div>



</body>
</html>
