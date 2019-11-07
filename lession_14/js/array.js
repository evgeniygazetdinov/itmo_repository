console.log(document);
console.log(document.body);

let list = document.getElementById('list');
console.log(list);
//все дочерние узлы
console.log(list.childNodes);
// все узлы теги
console.log(list.children[2]);
//последний элемент li
console.log(list.lastElementChild);
//последний узле
console.log(list.lastChild);
//предыдущий элемент
console.log(list.previousElementSibling);
//предыдуший узел
console.log(list.previousSibling);
//родительский узeл место где находиться элемент

console.log(list.parentElement);
let list2 = document.getElementById('list');
let elemByName = document.getElementsByName('data')
console.log(elemByName);

console.log(list2);
let li = document.getElementsByTagName('li');
console.log(li);

//по сss селектору
let elemByCss = document.querySelectorAll('ul>li');
console.log(elemByCss[0].innerHTML);
//создание элементов
let div =  document.createElement('div');
div.setAttribute('id','disable');
console.log(div.hasAttribute('id','disable'));
div.style.background = 'yellow';
//получить все стили элемента
let styles = getComputedStyle(list);
console.log(styles);
console.log(styles.background);
console.log(styles.marginTop);
//работа с классами
let cl = document.querySelector('tablet')
console.log(cl);
cl.classList.add('super-class');
/*добавление в документ  
 elem.append(...elem) во внутрь с конца
 elem.prepend(... elem) во внутрь но с начала
 elem.after(...elem) перед элементомz

 elem.replaceWith(... elem) замена
 elem.clone()
 elem.remove()
 elem.clone()
  */
for (let i = 0; i < 5 ; i++){
    let p = document.createElement('p');
    p.textContent = `не${i}`;
 //   p.innerText = `не${i}`;
    p.classList.add('border')
    div.append(p)
}
document.body.append(div);



let allTables = document.getElementsByTagName("table");
let table = allTables[0]
table.setAttribute(border);
//заголовок
let caption = table.createCaption();
caption.innerText = 'заголовок';
//ряд 
let row = table.insertRow(0);
let cell = table.insertCeil(1);
let cell2 = table.insertCeil(2);

cell.innerText = 'cell';
cell2.innerText = 'cell2';




