let form = document.createElement('form');
let input = document.createElement('input');
let checkbox = document.createElement('input');
input.style.background ='yellow';
checkbox.type = 'checkbox';
checkbox.name = 'changeColor';



console.log(document.getElementsByName('changeColor').checked)
form.append(input);
form.append(checkbox)

console.log(form);
document.body.append(form)