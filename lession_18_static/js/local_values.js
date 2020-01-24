//локальное хранелище



let local_storage = localStorage;
console.log(local_storage);
local_storage.setItem('key',123)
console.log(local_storage)
local_storage.setItem('key2',123)
console.log(local_storage.getItem('key'));




let data = {
    name: 'Alex',
    age: 22
}

local_storage.setItem('data',data);
console.log(localStorage)
//json формат в json 
let  jsonData = JSON.stringify(data);
console.log(jsonData)
local_storage.setItem('data',jsonData);
console.log(localStorage)
let datas = local_storage.getItem('data');
//обратно в обьект
console.log(datas)
let obs = JSON.parse(datas);
console.log(obs['name'])
