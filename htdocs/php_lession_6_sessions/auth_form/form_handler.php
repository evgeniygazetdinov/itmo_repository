<?php
session_start();

const SUCCESS = 'success';
const ERROR = 'error';
function check($login,$password){
    if(!isset($login) || !isset($password)){
        return false;
    }
    if($login !== 'qwerty' || $password !== 123){
        return false;
    }
    return true;
}


function server_answer(){
    $post = $_POST;
    $login = $post['login'];
    $password = $post['password'];
    if(!check($login,$password)){
        return ERROR;
       
    }
    $_SESSION['auth'] = true;
    $_SESSION['login'] = $login;
    return SUCCESS;
    }

    $server = $_SERVER;
    if($server['REQUEST_METHOD'] === 'POST'){

        echo server_answer();

    }

?>