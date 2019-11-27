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
      author: "Виталий"
  }
];

let goods = [
      {
          title: "Пианино",
          price: 3000,
          count: 25
      },
      {
          title: "Гитара",
          price: 1200,
          count: 40
      },
      {
          title: "Барабаны",
          price: 2700,
          count: 12
      },
      {
          title: "Флейта",
          price: 900,
          count: 50
      },
      {
          title: "Арфа",
          price: 3400,
          count: 5
      }
];


function create_title(object,row){
  for(let value = 0; value < 1; value++){
    for(prop in object[value]){
      let td = document.createElement("td");
      td.innerHTML = prop.toUpperCase();
      td.style.border ='1px solid black';
      row.append(td);
    }
  }
}

function fill_other(object,table){
  for(let value = 0; value < object.length;value++){
    let row = table.insertRow();
    let count = 0;
    for(prop in object[value]){
      //use counter for move cell
      let td = row.insertCell(count);
      td.innerHTML = object[value][prop];
      td.style.border ='1px solid black';
      count++;
    }
  }
  return table;
}


function create_table(object){
  let table = document.createElement("table");
  let row = table.insertRow();
  create_title(object,row);
  let title_with_other = fill_other(object,table);
  document.body.append(title_with_other);
}
create_table(goods);
create_table(articles);











