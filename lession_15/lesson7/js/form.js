//доступ к форме по значению атрибута name
let forms = document.forms.lesson;
console.log(forms)
//получить логин
let login_input = forms.elements.login
console.log(login_input);
//получить что внутри логина
let answer_from =  login_input.value
answer_from = 'qwe';

let radio_butn2 = forms.elements.color;
console.log(radio_butn2);
//кнопки две
for (let radio of radio_butn2){
    radio.addEventListener('click',change_color)
}
function change_color(){
   forms.elements.checkbox_fieldset.style.background =  this.value;
}


let select = forms.elements['lang[]'];
    for(let i of select){
        if(i.checked)
        console.log(i.value);
    }
let contries = forms.elements.countries

for (let elem of countries){
    if(elem.selected){
        console.log(elem);
    }
}

//обработка формы


forms.addEventListener('submit',take_form);

function take_form(event){
    event.preventDefault();
    console.log('отправка формы');
    //получение данных из оконшка логина
    console.log(this.login.value);
    let formdata = new FormData(this);
    //получить все из форм даты
    console.log(formdata.getAll('lang[]'));
    console.log(formdata);
}
//focur blur

let login_ = forms.elements.login;
login_input.addEventListener('focus',focus_on_element);
function focus_on_element(){
    console.log('фокус');
    this.nextElementSibling.classList.add('error');
}
login_input.addEventListener('blur',focus_off_element);
function focus_off_element(){
    if (this.value.length < 3) {
        this.nextElementSibling.classList.add('error'); 
    }
    else{
        this.nextElementSibling.classList.remove('error'); 
        this.nextElementSibling.classList.add('success') 

    }
    console.log('потеря');
}
