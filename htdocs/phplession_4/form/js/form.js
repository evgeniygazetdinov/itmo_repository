let form = document.forms.LANG;

form.addEventListener('submit',ajaxFormHandler);

function formhandler(event){
    event.preventDefault()
    console.log(event);
    if(!formValid(this)) return;
    //контекст вызовы функции
    // это значит что форма не валидна
    this.submit();
}

function formValid(form){
    return true;
}



//ajax


function ajaxFormHandler(event){
    //отвязка отправки
    event.preventDefault();
    if(!formValid(this))return;
    let formData = new FormData(this);
    //обьект запроса
    let xhr = new XMLHttpRequest();
    xhr.open('POST',this.action,'async');
    xhr.send(formData);
    //отправка на сервер
    //оnload отработает когда придет ответ от сервера
    xhr.onload = function(){
        if(xhr.status === 200){
            return responseHandler(xhr.responseText)
        }
    }
}


function responseHandler(server_answer){
    console.log('ОТВЕТ СЕРВЕРА !:',server_answer)
}