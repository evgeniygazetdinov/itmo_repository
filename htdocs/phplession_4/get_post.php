<?php
if ($request_method == "GET"){
    $get = $_GET;
    var_dump($get);
    
}
?>
<?php
$server = $_SERVER;
$request_method = $server['REQUEST_METHOD'];
//сбор из форм
if ($request_method =="POST"){
    $post = $_POST;
    $login = $post['login'];//name - инпута
    $age = $post['age'];
    var_dump($login,$age);
}



?>