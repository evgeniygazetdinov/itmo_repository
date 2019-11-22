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





/*

function addCell(tr, val) {
    var td = document.createElement('td');

    td.innerHTML = val;
    td.style.border ='1px solid black'
    tr.appendChild(td)
  }


  function addRow(tbl, val_1, val_2, val_3) {
    var tr = document.createElement('tr');

    addCell(tr, val_1);
    addCell(tr, val_2);
    addCell(tr, val_3);
    tr.style.border ='1px solid black'
 
    tbl.appendChild(tr)
  }

  function main(width,heigth) {
    let tbl = document.createElement('tbl');
    tbl.style.width = width;
    tbl.style.heigth = heigth;
    addRow(tbl, 'foo', 'bar', 'baz');
    addRow(tbl, 'one', 'two', 'three');
    addRow(tbl, 'one', 'two', 'three');
    body.append(tbl)
  }


  main(500,400);

  function generate_table(values){
    let body = document.getElementsByTagName('body')[0];
    for(let value in values){
      //create chains
      let td = document.createElement('td');
      td.classList.add('chain');

      let title = document.createElement("h2");
      title.innerText = values[value]["title"];
      let price = document.createElement('p');
      price.innerText = values[value]['price'];
      price.style.border ='1px solid black';
      console.log(values);
    
      //append chain in rows
        //for(let i = 0; i<= values.length; i++){
          let tr = document.createElement('tr'); 
          tr.append(td);
          body.append(tr);
        
      }
    }
    generate_table(goods);

*/
//TODO rebuild
// to form 
//0  title price count
// 1  гитара 1000 25





    function create_title_for_row(object){
       for(i=0; i< object.length; i++){

        console.log(object[i]);
        
      }
    }



    function create_chain(values){
      
      //inductive approach
      console.log(values);
      for (value in values){
        var td = document.createElement('td');
        td.innerHTML = values['value'];
        td.style.border ='1px solid black'
      }
      return td;
    }

    function create_row(object){
      let tr = document.createElement('tr'); 
      //call create one chain in loop
      for(let values in object){
        chain = create_chain(values);
        tr.append(chain);
      }
      return tr
    }

   function create_table(object){
      let body = document.getElementsByTagName('body')[0];
      //for creation row()
      for(i = 0; i < object.length; i++){
        row = create_row(object);
        body.append(row);
      }

    }


    //create_table(goods)