<?php
$user = 'root';
$password = 'root';
$db = 'users';
$host = 'localhost';
$port = 8889;

$pdo = new PDO("mysql:host=$host;dbname=$db", $user, $password);  
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);    
$pdo->exec('SET NAMES "utf8"'); 
$sql = "Insert into user(f_name,s_name) VALUES(:fname,:sname)";
;
$p = $pdo->prepare($sql);
$p->execute(['fname' => 'Bob',
'sname' => 'Desaunoissss']);
$sql = "SELECT * FROM user";
$p = $pdo->prepare($sql);
$res = $p->fetchAll();
var_dump($res);
?>
