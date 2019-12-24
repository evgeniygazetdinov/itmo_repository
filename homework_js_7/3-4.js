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








function focusOn(){
    if(this.type === 'password'){
        if (this.value.length < 3 || this.value.length > 10){
            this.previousElementSibling.classList.add("error");
            this.style.background = 'red';
        }
        else {
            this.style.background = 'green';
            this.previousElementSibling.classList.remove("error");
            this.previousElementSibling.classList.add("success");
        };
    }
    else{
        {
        if (this.value.length < 6){
            this.style.background = 'red';
            this.nextElementSibling.classList.add("error");
        }
        else {
            this.style.background = 'green';
            this.nextElementSibling.classList.remove("error");
            this.nextElementSibling.classList.add("success");
        };

    }}
}

function validateForm(event){
    event.preventDefault();
    let fData = new FormData(this);
    //take values from windows
    console.log(fData.get('log'));
    console.log(fData.get('pass'));
}

function reloadForm(event){
    log.style.background = 'white';
    pass.style.background = 'white';
    log.nextElementSibling.classList.toggle("error");
    log.nextElementSibling.classList.toggle('success');
    pass.previousElementSibling.classList.toggle('error');
    pass.nextElementSibling.classList.toggle('success');
}



    
let form = document.forms.login_pass_form;
let log = document.getElementsByName('log')[0];
let pass = document.getElementsByName('pass')[0];
log.addEventListener('focus',focusOn);
pass.addEventListener('focus',focusOn);
form.addEventListener('submit',validateForm);
form.addEventListener('reset',reloadForm)
