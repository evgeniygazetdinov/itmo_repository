<?php

function get_one(){


    return 1;
}



echo get_one();


function divider($first_number, $second_number){
    if ((is_int($first_number) || is_int($second_number)) && ((is_double($first_number) || (is_double($second_number))))){
        echo"<br>";
        echo 'неверные данные';
    }if(!$arg){
        echo"<br>";
        echo "на ноль делить нельзя";
        return false;
    }
    return $first_number /$second_number;

}



echo '<br>';
echo divider(3,5.4);
echo '<br>';
echo divider(9,1);
echo '<br>';
echo divider(4.4,5.4);
echo '<br>';
echo divider(0.4,9);
echo '<br>';

//работа с аргументами функци   й

function show_args(){
    echo (func_num_args());//кол-во элемегнтов принимаемое функцией
    echo (func_get_args());//вывести все аргументов
    echo (func_get_arg(1));//вывести первый аргумент
}




show_args(56,null,[2, 78], 'string');




function sum(int $a, int $b)
{
    return $a + $b;

};


echo sum(false,5.6);

echo 1;



// ананимные функции

$pos_num = function($num){
    return $num > 0;
};

//тип возвращаемоего значения этой функции callable
echo '<br>';
echo (is_callable($pos_num));



function some_func($data, callable $func){
    if ($func($data)){
        echo 'data валидна ';
    }
    else{
        echo 'данные не прошли проверку';
    }
}
some_func(1, $pos_num);


function getAllTasks(){
    $task1 = [
        'title'=>'Задача 1',
        'date'=>date_create('yesterday'),
        'participants'=>['Артур', 'Полина'],
        'closed'=>false
    ];
    $task2 = [
        'title'=>'Задача 2',
        'date'=>date_create('tomorrow'),
        'participants'=>[],
        'closed'=>false
    ];
    $task3 = [
        'title'=>'Задача 3',
        'date'=>date_create(),
        'participants'=>['Артур', 'Глеб'],
        'closed'=>false
    ];
    $task4 = [
        'title'=>'Задача 4',
        'date'=>date_create('yesterday'),
        'participants'=>['Павел', 'Полина'],
        'closed'=>true
    ];
    return [$task1, $task2, $task3, $task4];
}


function find_by_params(array $tasks, callable $func)
{
    echo($func($task));
    $filtered_task = [];
    foreach($tasks as $task){
        if($func($task)){
        $filtered_task[] = $task;
        }       
    }
    print_r("im here");
    return $filtered_task;
}


$old_task = function ($task)
{
    return !task['closed'] && $task['date'] < date_create();    
};




$find_artur = function ($task){
    return in_array($task['participants'],'Артур');
};



$tasks = getAllTasks();
echo "Задачи";
//echo find_by_params($tasks,$old_tasks);
//echo '<br>';
//echo find_by_params($tasks,$old_tasks);
//echo '<br>';
//echo find_by_params($tasks,$find_artur);


function func(){
    var_dump($some_var);
    var_dump($OUT_CONST);
    $some_var = 'локальная переменная';
    function func1(){
        print_r('hello func1');
    }
}
func();
func1();