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
<?php 
    setcookie();
    $post = $_POST;
    $server = $_SERVER;
    if($server['REQUEST_METHOD'] === 'POST'){
        if(isset($post['color'])){

    
        $color = $post['color'];
        setcookie('color',$color,time()+3600);
    }
    else{
        $color =$_COOKIE['color'];
    }
}
    if($server['REQUEST_METHOD'] ==='GET'){
        if(isset($_COOKIE['color'])){
             $color = $_COOKIE['color'];
        }
        else {
            $color = 'white';
        }
    }
    
?>
<body style="background-color:<?php echo $color;?>">

<a href="f.php">цвет</a>
<a href="s.php">главная</a>
<form action="f.php" method="post">
    <h5>изменить цвет фона</h5>
            <select name="color">
                <option value="red">красный</option>
                <option value="green">зеленый</option>
                <option value="yellow">yellow</option>
            </select>
            <input type="submit" value="изменить">
</form>







</body>
</html>
