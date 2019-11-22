//JQuery(function(){    
//}) котроткая форма


//JQuery(function).ready{function}

/* раббота с jquery
JQuery(function(){
JQuery('*') - все элементы
JQuery('p') - все p в документе
JQuery('.some-class') - все элементы по имени класса
JQuery('#id') - все элементы по id
JQuery('ul > li') - другие селекторы
JQuery('.border, #btn, h2') - 

let elem =document.getElementsByTagName('info'); в таком виде не доступны методы jquery
JQuery(elem) преобразование в jquery
$() - значок jquery

})
*/
$(document).ready(function(){
jQuery('table tr:even').css('background','orange');
jQuery('table tr:odd').css('background','red');
})

$('.cards div').css('color','orange')


$('.cards div').each((index, elem)=>{
    console.log(elem);
    console.log(jQuery(elem));
    console.log(index + ':' + elem.dataset.present);

}) 
console.log('o')
console.log($('.cards div')[2]);
jQuery('.cards  div').filter((index,elem) => elem.dataset.present === "cat").css('background','red');
jQuery('.cards  div').not((index,elem) => elem.dataset.present === "dog").css('background','green');


jQuery('nav li').has('ul').css('background','grey');
console.log(jQuery('li'));
console.log(jQuery('ul').children('.submenu'));
jQuery('li').children('.submenu').each((index,elem)=>{
    console.log(elem.innerText);
});

//устанавливает
jQuery('table').attr('border',1);
console.log(jQuery('table').attr('border'));
jQuery('table').removeAttr('border');


//data атрибуты
jQuery('.cards div').each( function(){
    console.log(this);
    console.log(jQuery(this).data('present'))//доступ к ко всем датасетам
    
});
//document.querySelectorAll('.cards div').forEach((index,item,arr) =>{
//    console.log(item.dataset.present);
//});
jQuery('.cards div').each(()=>{
    console.log(this)
})


//css стили

console.log(jQuery('.cards div').css('font-size'));
//('p').ccs('color','green');
jQuery('h2').css('color',function(ind,oldVal){
    if(oldVal === 'rgb(0, 0, 0)')
        return 'red';
    else
        return 'blue';

});


//css selector


jQuery('.cards div').heigth= 700;
//добавить класс к существующему
jQuery('.cards div').first().addClass('border margin');


console.log(jQuery('.cards div').first().hasClass('border'));
jQuery('.cards div').each(function(){//вернет все с тегами
    console.log(jQuery(this).html('<span>вас ждет подарок</span>'))
})
jQuery('.cards div').each(function(){
    console.log(jQuery(this).text())//вернет текст из элемента
})



jQuery('.cards').html(function(ind, oldVal){
    return oldVal += '<span>добавленый элемент</span>'
})


jQuery('.images').append('<div><h1>сьешь еще</h2></div>')

// события
//1
jQuery('.info div').bind('click',function(){
    $(this).css('background','yellow');
})
jQuery('.info div').one('click', function(){
    console.log('one click');
})

//2 второй on 




//третий вкусный вариант событиый
jQuery('body').click('.info div',function(){
    console.log('click');
})




jQuery('.info div').click(function(){
    $(this).siblings().toggle('fast');
})