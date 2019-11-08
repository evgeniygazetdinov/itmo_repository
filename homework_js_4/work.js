//задание 1

let cities_sort_separate = function(){
    let text = prompt('название города');
    let cities = text.split(" ");
    let sorted_citites = cities.sort();
    let new_sorted_sting = sorted_citites.join();
    return new_sorted_sting;
}


// задание 2
 let find_substring_in_string(){
     let text = prompt('строка');
     let substring = prompt('подстрока');
     if(text.includes(substring)){
         return console.log(`строка есть`);
     }
     else{
         сonsole.log('нет строки');
     }
 }