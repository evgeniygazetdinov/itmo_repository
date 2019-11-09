//задание 2

let cities_sort_separate = function(){
    let text = prompt('название города');
    let cities = text.split(" ");
    let sorted_citites = cities.sort();
    let new_sorted_sting = sorted_citites.join();
    return new_sorted_sting;
}


// задание 3
 let find_substring_in_string = function (){
     let text = prompt('строка');
     let substring = prompt('подстрока');
     if(text.includes(substring)){
         return console.log(`строка есть`);
     }
     else{
         сonsole.log('нет строки');
     }
 }



 // задание 4


 let polycheck = function(word){

    //разбить слово
    let div_word = word.split('');
    console.log(div_word);
    //попарно каждое слово
    let posible_polidrome =[]
    for (let i = 0; i < div_word.length; i++){
        if (div_word[i] === div_word[div_word.length-i]){
            posible_polidrome.push(div_word[i])

        }
        
    }
    
 }