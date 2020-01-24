<?php
    session_start();
    $_SESSION['auth'] = true;
    $_SESSION['name_user'] = 'saniok';
   

?>
<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>

<nav>
    <a href="#">Страница 1</a>
    <a href="account.php">Страница 2</a>

    <?php if($auth):?>
    <a href="logout.php">выйти</a>
    <?php else:?>
    <a id="open_modal">Войти</a> <!-- Выйти / Войти-->
    <?php endif ?>
</nav>

<!--модальное окно-->
<div class="modal">
    <p id="errors"></p>
    <form name="auth_form">
        <p><input class="validate" type="text" name="login" placeholder="логин"></p>
        <p><input class="validate" type="password" name="password" placeholder="пароль"></p>
        <p>
            <input type="submit" value="Отправить">
            <input id="cancel" type="button" value="Отмена">
        </p>
    </form>
</div>

<h3>Страница доступна всем пользователям</h3>

<?php if(!$auth): ?>
<script src="js/form.js"></script>
<?php endif?>
</body>
</html>

