
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
  //access to  title
  title_with_other.rows[0].addEventListener('click', function(event){
    value_for_compare = (event.target.innerHTML.toLowerCase().toString());
    console.log(value_for_compare)
    //TODO rebuld sort 
    object.sort( (a, b) =>a[value_for_compare].localeCompare(b[value_for_compare]))
    document.body.removeChild(table);
    create_table(object);
  }
);
}
create_table(articles);






//задание 2

function genRow(numArr){    
  let div1 = document.createElement("div");
    //генерация карточек
  let j=0;
  let text=1;          //подпись карточки
  while(j<numArr) {
      for (let i = 0; i < numArr; i++) {
          let p1 = document.createElement("p");
          p1.innerText = text;
          p1.style.cssText = `
          width: 50px;         
          border: 1px solid black;
          display: inline-block;
          margin: 10px;
          background: red;
          text-align: center;
          padding: 30px ;
      `;
      }
      j++;
    
  }
return div1;
}


function generateTable(row,column){
  let table = document.createElement('table');
  for(let i=0;i<column;i++){
    table.append(genRow(i,3));
  }
  return table;
  }




let table = genRow(1,1);
document.body.append(table);









