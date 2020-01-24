<?php
$auth = true;
$login = 'qwerty';
?>
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>my super form</title>
</head>
<body>
<?php
    if($auth): ?>
        <h1>wellcome</h1>
        <?php echo $login ?>
    <?php else: ?>
        <h1>Welcome Guest</h1>
        <a href ='#'> войти в личный кабинет </a>
<?php
endif ?>
</body>
</html>
