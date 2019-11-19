    let books = [
        {author: 'Лермонтов',title:'Герой нашего времени'},
        {author: 'Толстой',title:'Война и мир'},
        {author: 'Гоначаров',title:'Обломов'}
    ]



let goods = {
    piano: {
        title: "Пианино",
        price: 3000,
        count: 25
    },
    guitar: {
        title: "Гитара",
        price: 1200,
        count: 40
    },
    drum: {
        title: "Барабаны",
        price: 2700,
        count: 12
    },
    flute: {
        title: "Флейта",
        price: 900,
        count: 50
    },
    harp: {
        title: "Арфа",
        price: 3400,
        count: 5
    }
};

//первое задание

let get_goods = function(obj,start_price,finish_price){
    values = {}
    for(let item in obj){
        if ((obj[item].price > start_price) && (obj[item].price < finish_price)){
            values[item] = obj[item]
        }
    }
    return values
}
console.log(get_goods(goods,1,1000))

//второе задание 
let add_to_cart = function(obj,title,count_to_cart){
    cart = {}
    for(let item in obj)
        if (obj[item].title === title){

            if(obj[item].count >= count_to_cart){
                cart[item] = obj[item].title;
                cart[item] =  obj[item].count;
                console.log(`${obj[item]} добален в корзину`);
        }
        else{
            console.log('такого количества нет в наличии');
        }
    }
    else{
        console.log('неверное количество')
    }
    return cart;
}

console.log(add_to_cart(goods,'Гитара',1));

// третье заданиe

let book_sort = function (arr){
    let sorted = arr.sort((a, b) => a.title.localeCompare(b.title));
    return sorted;
}


console.log(book_sort(books));