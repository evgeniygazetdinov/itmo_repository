
let reg_exp1 = new RegExp('reg');
let reg_exp2 = /reg/i/g/;
//i g доп параментры к шабблону
//^начало стройки

string = 'Reg Exp in Javascript reg'
console.log(reg_exp1);
console.log(reg_exp2);



//метод test возвращает true афдыу  если строка соответствует синтаксису регулярных выражений

sting = 'sting';
console.log(reg_exp2.test(sting));
reg_exp2 = /[0-9]/;
let regexp = /r.+g/ig;
console.log(sting.match(regexp));
news = 'с новым годом!'