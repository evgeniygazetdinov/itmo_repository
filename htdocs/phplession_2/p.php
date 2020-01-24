<?php
$sum = 1000;

if($sum >= 500 && $sum< 800){
    echo $sum = $sum - $sum * 0.05;
}
elseif($sum >= 800 && sum <=1000){
    echo $sum = $sum -$sum *0.1;
}
elseif($sum >=1000){
    echo $sum = $sum - $sum * 0.1, 'и подарок';
}
else{
    echo $sum;
}
/* альтернативный синтаксис if  else if esle
if(условие):
    code;
elseif:
    code;
else:
    code;
endif;
*/
$num =32; 

    switch($sum){
        case '2':
            echo '2';
            break;
        case 32:
            echo 32;
            break;
        case 55:
            echo 66;
            break;
        case '2':
            echo 4;
            break;
        default:
            echo '<br>',3;
        };


    /*
    алтернативный синтаксис такой эже без скобок 
    но заканчивается endswitch
*/


while(true){
    for($i=0;$i<3;$i++){
    $abc = rand(0,99);
    echo '<br>',$abc;
        if ($abc >90){
            break;
        }
    }
}
/*альтернативый while





foreach ($userinfo as $key => $value){
    var_dump($key. ' . ' .$value)
}


//foreach($userInfo as $key => $value):
    meло;
endforech;