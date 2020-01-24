// библиотека jQuery - набор функций для работы с DOM деревом
// jQuery(document).ready(function () {/*code here*/});

jQuery(function () { // сокращенная запись функции на 2 строке
    /*code here*/
    /*jQuery('*') - все элементы
    jQuery('р') - все теги (p)
    jQuery('.some-class') - все элементы по имени класса
    jQuery('#id') - элементы по id
    jQuery('ul > li') - другие css селекторы
    jQuery('.border, #btn, h2')

    jQuery('div') эквивалентно $('div')

    let elem = document.getElementById('info');
    jQuery(elem) - преобразование элемента в объект jQuery*/

    // jQuery(selector)
    //     .method1()
    //     .method2()
    //     .method3();
    // let data = jQuery(selector).method4();

    jQuery("#table tr:even")
        .css('background', 'orange');
    jQuery("#table tr:odd")
        .css('background', 'yellow');

    jQuery("#cards div")
        .last().css("color", "orange")
        .end()
        .first().css("color", "yellow");

    jQuery("#cards div").each((index, elem)=>{
        console.log(elem);
        console.log(jQuery(elem));
        console.log(index + ": " + elem.dataset.present);
    });

    jQuery("#cards div")
        .filter((index, elem)=>elem.dataset.present === 'cat')
        .css('background', 'green');

    jQuery("#cards div")
        .not((index, elem)=>elem.dataset.present === 'cat')
        .css('background', 'pink');

    jQuery('nav li')
        .has('ul')
        .css('background', 'gray');

    // возвращает дочерние элементы
    jQuery('li').children(".submenu1")
        .each((index, elem)=>{
            console.log(elem.innerText);
        });

    // атрибуры элементов
    jQuery("#table").attr('border', 1);
    console.log(jQuery("#table").attr('border'));
    jQuery("#table").removeAttr('border');

    // data атрибут
    jQuery('#cards div').each( function(){
        console.log(this.dataset.present);
        console.log(jQuery(this).data("present"));
    });
    document.querySelectorAll('#cards div')
        .forEach((item, index, arr)=>{
            console.log(item.dataset.present);
        });
    jQuery('#cards div').each(()=>{
        console.log(this);
    });

    // css стили
    console.log(jQuery('#cards').css('font-size'));
    jQuery('p').css('color', 'green');
    jQuery('p').css(
        {color: 'green', padding: '5px'}
        );
    jQuery('h2')
        .css('color', function (ind, oldVal) {
        if (oldVal === 'rgb(0, 0, 0)') return 'red';
        else return 'blue';
    });

    // высота и ширина
    // получить значение
    console.log(jQuery('#cards').width());
    console.log(jQuery('#cards').height());
    // усановить значения
    jQuery('#cards').width(700);
    jQuery('#cards').height(200);

    // css классы
    // добавление
    jQuery('#cards div')
        .first()
        .addClass("border margin");
    // проверка на наличие
    console.log(
        jQuery('#cards div')
        .first()
        .hasClass('border')
    );
    // удаление класса
    jQuery('#cards div')
        .first()
        .removeClass("border");
    // удалить, если есть класс / добавить, если нет класса
    jQuery('#cards div')
        .first()
        .toggleClass("margin");

    console.log(jQuery('#cards').html())
    jQuery('#cards div').each(function () {
        console.log(jQuery(this).html());
        jQuery(this).html('<span>Вас ждет подарок</span>');
    });

    console.log(jQuery('#cards').text())
    jQuery('#cards div').each(function () {
        console.log(jQuery(this).text());
    });

    jQuery('#cards').html(function (ind, oldVal) {
        return oldVal +
            "<div data-present='rabbit'>Новое значение</div>"
    });

    jQuery('.images')
        .append('<div><img src="#"><p>IMG 1</p></div>');
    jQuery('.images')
        .append('<div><img src="#"><p>IMG 2</p></div>');

    // jQuery('.images').replaceWith();
    // jQuery('.images').remove(selector);

    //события
    // добавление
    jQuery('#info div').bind('click', function () {
        $(this).css('background', 'yellow');
    });
    // удаление
    // jQuery('#info div').unbind();
    // однократное событие
    jQuery('#info div').one('click', function () {
            console.log("one click")
        });

    jQuery('body')
        .on('click', '#info div', function () {
            console.log(jQuery(this).text());
        });
    jQuery('body').off();
    jQuery('body').off('click', '#info div');

    jQuery('#info h2').click(function () {
        $(this).siblings().toggle('fast');
        // $(this).siblings().hide();
        // $(this).siblings().show();
    });























});