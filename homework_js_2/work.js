
// первое задание


let arr = new Array(45);
for (i = 0; i < arr.length; i++){
    arr[i] = Math.floor(Math.random() * 10) 
}
let find_seven = function(array){
    for(i = 0; i<arr.length; i++){
        array[i]+ array[i+1]
        if (array[i] + array[i+1] === 7){
            d =[array[i],array[i+1]];
            return d ;
        }
    }
}

console.log(arr);
console.log("this find_seven");
console.log(find_seven(arr));


//второе задание 

let new_array = Array(100);
for (i = 0; i < new_array.length; i++){
    new_array[i] = i;
    if (i % 3 ===0){
        new_array[i] = "three";
    } 
    if (i % 5 === 0){
        new_array[i] = 'five';
    }
    if (i % 3 === 0 && i % 5 === 0){
        new_array[i] =  'three'+ "five";
    } 

}
console.log(new_array);



//третье задание


let washing_function = function(plates){
    for( i = plates; i > 0; i-- ){
        detergent = plates / 2;
        plates--;
        console.log(`${plates} plate be washed`);
        console.log(`${detergent} quantity detergent for ${plates} plates`);
    }

}


//четвертое задание
let quantity_digit = Math.floor(Math.random() * 10) 
let first_array = Array(quantity_digit);
let second_array = Array(quantity_digit);
console.log(first_array);
console.log(second_array);
let averange_first = 0;
let averange_second = 0;

for(i = 0; i < quantity_digit ; i++ ){
    number_for_push_one = Math.floor(Math.random() * 10)
    number_for_push_two = Math.floor(Math.random() * 10)
    //first push after calculate average
    first_array[i] = number_for_push_one;
    second_array[i] = number_for_push_two;
    averange_first+= first_array[i]
    averange_second+= second_array[i]
}
console.log(first_array);
console.log(second_array);
console.log('if first averange bigger print first_aver bigger or less === print second_aver bigger');
console.log('this is first averange');
console.log(averange_first/quantity_digit);
console.log('this is second averange');
console.log(averange_second/quantity_digit);
if (averange_first/quantity_digit > averange_second/quantity_digit){
    console.log('first bigger');
}
else{
    console.log('second bigger');
}


//пятое задание
//i

let create_array_and_print = function(){
    let quantity = prompt('quantity for array');
    arr = Array(quantity);
    for(i = 0; i < quantity ; i++){
        arr[i] = i;
    }
    for(i = arr.length; arr.length> 0; i--){
        console.log(arr[i]);
    }
}

//iii

let draw_triangle = function(){
    let length = prompt('length for triangle');
    let line = '';
    for(i = 0; i <= length; i++){
        for(y = 0; y <= i; y++){
            line+= "%";
        }
        line += '\n';
    }
    return line;
}