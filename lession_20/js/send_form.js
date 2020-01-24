//обработчик ошибок 

try{
//потенциально опасный код
 console.log(1/0);
}catch(error){
    //обработка ошибок
   throw new Error('xaxa');
}



console.log('выполнение скрипта')
let car;
/*
if (!car){
    throw new Error('ОШИБка');
}
*/


class SomeException extends Error{
    constructor(message,name){
        super(message);
        name = "SUPER_HANDLER";

    }
}


/*if (!car){
    throw new SomeException('ОШИБкаddddd');
}*/


function some_func(data){
    if (typeof data != 'string'){
        throw new SomeException('данные должны быть строчкой');
    }
}
some_func(1);