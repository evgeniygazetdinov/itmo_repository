let books = [
    {author: 'лермонтов',title:'война и мир'},
    {author: 'Гоначаров',title:'Обломов'}
]

function book_sort(arr){
    arr.sort((a, b) => a.title.localeCompare(b.title));

}
book_sort(books);
console.log(books);



function add_to_card(obj, title, counter){
    for(let item in object){
        if (obj[item].count != counter ){
            console.log('недостаточное количество');
        }
        else{
            obj[item].count -= counter;
            console.log('товар есть')
        }
    }
}