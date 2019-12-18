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
    let login = document.createElement('input');
    let pass = document.createElement('input');
    let form = document.createElement('form');
    let tab = document.createElement('br');
    let send = document.createElement('input')
    pass.type = 'password';
    send.type = 'button';
    send.value = 'отправить';
    form.append(tab);
    form.append(login);
    form.append(tab);
    form.append(pass);
    form.append(send);

    document.getElementsByName("fo").focus()



    console.log(form);
    document.body.append(form);   


}

checkLoginPassword()