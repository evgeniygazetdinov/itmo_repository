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




    function find_keys_for_title(object){
      //find all keys from all objects
      keys = []
      for(i=0;i<object.length;i++){
      Object.keys(object[i])
      .forEach(function eachKey(key) { 
        keys.push(key)
       });;
      }
      return keys
    }

    function get_sorting_keys(keys){
      //remove duplicates
      sort_keys = new Set()
      for(i = 0;i < keys.length; i++){
        sort_keys.add(keys[i])
        }
      return sort_keys;
    }

    //function extract_values_from(objects){
    //  for()
    //}


    function create_chain(text_for_chain,upper = false){
      //inductive approach
      //TODO fix upper for text
        var td = document.createElement('td');
        if (upper === true){
          td.innerHTML = text_for_chain.upper();
        }
        else{
          td.innerHTML = text_for_chain;
          td.style.border ='1px solid black';
        }
        return td;
    }

    function create_row(keys,upper = false){
      let tr = document.createElement('tr'); 
      for (let i = 0;i< keys.length; i++){
        chain = create_chain(keys[i],upper = false);
        tr.append(chain);
      }
      return tr;
    }
    
    
    function fill_title(object){
      keys_for_title = find_keys_for_title(object);
      sorted_keys = get_sorting_keys(keys_for_title);
      keys= Array.from(sorted_keys);
      title = create_row(keys,true);
      return title;
    }

    function extract_values_from(object){
      //extract all values from objects
      values = []
      for(let i =0;i<object.length;i++){
        
        values.push(Object.values(object[i]));
      }
      return values;
    }
     
    function fill_rows(object){
      rows = []
      values = extract_values_from(object);
      for(i = 0;i<values.length;i++){
        row = create_row(values[i]);
        rows.push(row);
      }
      console.log(rows);
      return rows
    }

      //pack this into array


   function create_table(object){
      let body = document.getElementsByTagName('body')[0];
      //for creation row()
    //  for(i = 0; i < object.length; i++){
       title = fill_title(object) 
       //other = fill_rows(object)
       rows = fill_rows(object);
       body.append(title);
       body.append(rows);
       //body.append()
      }



    create_table(goods);