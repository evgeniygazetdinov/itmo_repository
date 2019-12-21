//задание 3
function initElements(){
    let form = document.createElement('form');
    let input = document.createElement('input');
    let checkbox = document.createElement('input');
    input.style.background ='yellow';
    checkbox.type = 'checkbox';
    checkbox.name = 'changeColor';
    checkbox.addEventListener('click',changer)
    function changer(event){
        let change = event.target;
        if(checkbox.checked === true){
            input.style.background = 'red';
            input.disabled = 'true';
        }
        else{
            input.style.background = 'yellow';
            input.removeAttribute('disabled');
            }
}
form.append(input);
form.append(checkbox)
return form
}
function createCheckbox(){
    let elements = initElements();
    document.body.append(elements);
}

createCheckbox();




function checkLoginPassword(){
//    let elements = createElements();
    let error = document.createElement('p')    
    let login = document.createElement('input');
    let pass = document.createElement('input');
    let form = document.createElement('form');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let tab = document.createElement('br');
    let send = document.createElement('input')
    error.innerText = '';
    pass.type = 'password';
    send.type = 'button';
    send.value = 'отправить';
    p1.innerText = 'логин';
    p2.innerText = 'пароль';
    form.append(tab);
    form.append(p1);
    form.append(login);
    form.append(tab);
    form.append(p2);
    form.append(pass);
    form.append(tab);
    form.append(send);
    
    
    function drawErrorNear(error,nameOfElement){
        let pass = 'пароль';
        let log = 'логин';
        let warn = 'неверный';
        error.style.background = 'red';
        if(nameOfElement == 'login'){
            error.innerText = warn+log;
        } 
        else{
            error.innerText = warn+pass;
        }
    }

    
    
    login.addEventListener("focusin", login.style.background = 'red';);
    login.addEventListener("focusout", () => login.style.background = 'white');


    console.log(form);
    document.body.append(form);   


}

checkLoginPassword()