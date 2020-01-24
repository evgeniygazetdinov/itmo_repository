//if (условие){
//    блок кода когда выполнится определенное условие
//}
let age = 2;
if (age >= 18){
    console.log("доступ разрешен");
}
else{
    console.log("доступ неразрешен");
}
let season = "winter";
if (season === 'summer'){
    document.body.style.background = "yellow";
}
else if  (season === 'autumn'){
    document.body.style.background = "green";
}
else if  (season === 'winter'){
    document.body.style.background = "blue";
}
else{
    document.body.style.background = "black";
}



let win =""
//console.log(document.input.name);

let day = 2;


//switch(day){
//    case "1111":
//    alert('большой приз');
//    case "5469":
//    alert('супербольшой приз');
//    case "5469":
//    alert('ты миллионер');
//    default :
//        alert('попробуй еще')
//}


//циклы используются для однотипного действия много раз


//while(key != 12){
//    key+=1
//    alert('не то пальто'+key);
//}
//let f = prompt("введите");
//alert(f);


//while (key !== 'admin'){
//    key = (prompt('введите ключ'));
//}


let a = 3;
do{
    //тело 
    console.log("a="+a);
    a--;
}
while(a);
//условие
//дано 5 попыток что бы угоадать число


let attempt = 5;
let answer = 300;

//for(;;){}  бесконечный for
//for(инициализация;условие;обновление счетчиков){}


/*for( let i = 1;i <= attempt;i++){
    /// тело
    let data = prompt('число');

    if (parseInt(data) === answer){

        break;
    }
}
*/

//вывести четные числа до 1 до 58


let number = 3;

do{
    if (number % 2 === 0) {
        console.log(number);
    }
    number++;
}
while(number <= 58);