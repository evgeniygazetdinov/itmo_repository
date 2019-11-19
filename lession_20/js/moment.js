let book1 = {
    title:'азбука',
    price:500,
}

let book2 = {
    title:'неазбука',
    price: 5000,
}

let book3 = {
    title:'казбука',
    price: 2500,
}


let books = new Map();
books.set(1,book1);
books.set(2,book2);
books.set(3,book3);
console.log(books.size);


//проверить ежсть ли такой ключ
console.log(books.has(1));
console.log(books.has(7));


books.delete(2);
console.log(books)
//удаление всех элементов

books.clear()
console.log(books)
//перебор
books.set(1,book1);
books.set(2,book2);
books.set(3,book3);
console.log(books.get(2))

books.forEach((value,key,map) =>{
    console.log(value.title);
    console.log(key);

})
//циклом


for(let book of books.entries()){
    console.log(book);
}


//получить все ключи 
console.log(books.keys());
// получить все значения  
console.log(typeof books.values());


let map = new Map(Object.entries(book2));
map.forEach((value,key,map) =>{
    console.log(key);
    console.log(value);
})



let obj = Object.fromEntries(books);
console.log(obj);


let bookSet = new Set();
bookSet.add(book1);
bookSet.add(book2);
bookSet.add(book3);
bookSet.add(book1);
console.log(bookSet);
console.log(bookSet.size);







