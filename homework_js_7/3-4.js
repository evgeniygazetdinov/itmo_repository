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
        console.log('enabled');
    }
    else{
        input.style.background = 'yellow';

        console.log(checkbox.checked)
        console.log('disabled')
        console.log(input);
        input.removeAttribute('disabled');
        }
}
form.append(input);
form.append(checkbox)
return form
}

let elements = initElements();
document.body.append(elements);



