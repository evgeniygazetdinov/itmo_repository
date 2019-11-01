function range(start, end, step = 1){
    let arr = [];
    for(i=0; start < end; i++){
        arr[i] = start;

    }
    return arr
}


//замыкание
function multi(n){
    let x = n ;
    return function (m){
        return x *m;
    }
}


let multi6 = multi(6);
res = multi(5);
console.log(res);
res = multi6(10);
console.log(res);




/*(function (){
    console.log('самовызвающая функция')
});
arr = [1,2,3,4,5,6]
arr.forEach(function(elem,index,array){
    console.log(index+ ''+elem);array[index]*2;
})

//функция принимает элемент и возвращает елси элемент больше нуля


let  less_zero = (elem, index, array) => elem > 0;
///map
let sqrt = (elem, index, array) => elem >0;
newArr = arr.map(sqrt);
res = arr.every(lessZero);
console.log(res);*/

//строки 
let age = 34;
let name = 'TOM';
console.log(`Имя пользователя: ${name} возраст ${age}`);



 let convert = function(str){
     if (str == str.toUpperCase){
        return str.toUpperCase
     }
        return str.toUpperCase;
     if  (str  == str.toLowerCase){
        return str.toLowerCase
     }



 }


 let converter = function(str,flag){
    if (str !== str && str !== str){

    }
   
    if (flag ==="1"){
        return str.toLowerCase()
    }
    if (flag === '2'){
        return str.toUpperCase()
    }

 }


//проверка вхождеиния в строку

 function isSpam(str, ...word){
     str.includes(word);
 }



 fucntion isSpam(str ...word){
     for (let i=0;i<word.length;i++){
         if (str.includes(word[i])){
             return true;
         }
     }
 }