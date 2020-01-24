form_handler.php - обработчик
<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Загрузка файлов</title>
    <style>
        form div { margin-bottom: 20px; }
    </style>
</head>
<body>
<form action="form_handler.php" method="post"
    enctype="multipart/form-data"> <!--атрибут необходим при загрузке файлов-->
    <div>
        <input type="text" name="title"
               placeholder="title">
    </div>
    <div>
        <input type="file" accept="image/*"
               name="picture">
    </div>
    <div>
        <input type="submit" value="Загрузить">
    </div>
</form>
</body>
</html>