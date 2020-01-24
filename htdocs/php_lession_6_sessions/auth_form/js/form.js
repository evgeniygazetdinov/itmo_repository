// объявление переменных
// кнопка открытия модального окна
let open_modal_btn = document.getElementById('open_modal');
// кнопка закрытия модального окна
let cancel_btn = document.getElementById('cancel');
// модальное окно
let modal = document.querySelector('.modal');
// элемент для вывода ошибок заполнения полей формы и авторизации
let error_field = document.getElementById('errors');
// форма
let form = document.forms.auth_form;

const SUCCESS = 'success';
const ERROR = 'error';

// функции
// открытие модального окна
function open_modal() {
    modal.classList.add('open');
}
// закрытие модального окна
function close_modal() {
    modal.classList.remove('open');
    error_field.value = '';
}

// обработчики событий
// при нажатии (событие click) на кнопку open_modal_btn будет вызвана функция open_modal
open_modal_btn.addEventListener('click', open_modal);
// при нажатии (событие click) на кнопку cancel_btn будет вызвана функция close_modal
cancel_btn.addEventListener('click', close_modal);



function validate(){
    if(form.login.value.length <3 || form.password.value.length <3){
        return false;

    }
    return true;
    
}
function responseHandler(text){
    if (text === SUCCESS){
        window.location.replace('/account.php/')
    }
    else if(text === ERROR){
        error_field.innerText = 'ошибка авторизации';
    }    

}
function sendForm(event){
    event.preventDefault();
    let values_validate = validate();
    if(!values_validate){
        error.error_field.innerText = 'Не все поля заполнены корректно';
        return ;
    }
    let request = new XMLHttpRequest();
    request.open('post',this.action)
    request.onload = function(){
        if (request.status === 200){
            responseHandler(request.responseText);
        }

    }
request.send(new FormData(this));
}





form.addEventListener('submit',sendForm)