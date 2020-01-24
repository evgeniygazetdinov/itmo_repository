/*let promise = new Promise(
    function(resolve,reject){
        if('ok'){
            resolve('ok');
        }
        else{
            //если сломалось 
            reject('not ok');

        }
    }
)



let successHandler = (okResult) => console.log(okResult);
let errorHandler = (errorResult) => console.log(errorResult);

promise.then(successHandler,errorHandler);
*/



//ajax запросы 

let ajaxRequest = (url) =>{
//консрукто принимающий функцию
    return new Promise(function(resolve,reject){
        let request = new XMLHttpRequest();
        request.open('GET',url,true);
        request.onload = function(){
         //если успех
         if (request.status === 200){
             resolve(request.response);
         } 
         else{
             reject(Error('ошибка '+request.statusText));

         }  
        }
        request.send();

        //отправка запросаd
    }); 
}


successHandler = (okResult) =>{
    let p = document.createElement('p');
    p.innerText = JSON.parse(okResult);
    document.body.append(p);
}
errorHandler = (errorResult) =>{
    let p = document.createElement('p');
    p.innerText = 'нет данных';
    document.body.append(p);
    console.log(errorResult);
}


ajaxRequest('https://baconipsum.com/api/?type=meat-and-filler').then(successHandler,errorHandler)