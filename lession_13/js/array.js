let sim = Symbol();
sim = Symbol("id");
sim2 = Symbol("id");
console.log(sim.toString(),sim2.description);//simbol descrupt
//global values vault
let globalSum = Symbol.for('индефикатор');
let globalSum2 = Symbol.for('индефикатор');

let obj = {};//определение ассоц массива
let article = {
    title: "javasript",
    author: "Алексей",
    date : null
}
console.log(article['author'],article['title'],article);


article.date = new Date().toDateString();
console.log(article['author'],article['title'],article);


let id = Symbol();
article[id] = 1;
console.log(article['author'],article['title'],article);
//проверка свойств в обьекте
if (!('img' in article)){
    console.log(' yunr');
}
let imgPop = 'img';
article[imgPop] = 'js.png';
console.log(article);
for (key in article){
    console.log(key);
}
let articles = [
    {
        id: 1,
        title: "JS",
        text: "Статья про JS",
        author: "Александр"
    },
    {
        id: 2,
        title: "PHP",
        text: "Статья про PHP",
        author: "Виталий"
    },
    {
        id: 3,
        title: "Базы Данных",
        text: "Статья про Базы Данных",
        author: "Евгения"
    },
    {
        id: 4,
        title: "HTML",
        text: "Статья про HTML",
        author: "Виталий",
        func: function(){
            console.log('this function');
        }  
    }
];

let return_arr_with_values = function(arr,key,value,){
    let new_arr = []
    for(let i = 0;i< arr.length;i++){
        if (arr[i][key] === value){
            new_arr.push(arr[i]);
        }
    } 

        return new_arr;
}


//console.log(return_arr_with_values(articles,'author',"Виталий"));
//articles[3].func();
articles.printObj = function(){
    for(i=0;i<this.length;i++){
        console.log(this[i].title);
    }
}

articles.printObj();

//деструкция
let book = {
    [id]: 1,
    title: 'Лю́берцы',
    price: 400,
}


let userinfo = {
    id : 1,
    login : 'qwe',
    name : 'admin'
}

let {userId, login, name} = userinfo;
console.log(userId, login, name)

