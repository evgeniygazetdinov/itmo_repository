//задача 1

let find_sum_natural_number = function(n){
    // 3 = 2+1
    //
    //sum = (5 * (5 + 1) / 2 = (5 * 6) / 2) = 15
    console.log('сумма натуральных чисел равна')
    return (n * (n + 1)) / 2
}
// задача 2


let range = function(start,step = 1 ,finish){
    arr = Array(finish)
    for (let i = start; i< finish;i+step){
        arr[i] = start;
    }
    return arr;
}

//задача 3

let return_day_by_number = function(day){
    if (day <= 5 || day === 21){
        return day+'день';
    }
    if (day <=20){
        return day+'дней';
    }
    
    if (day >=22){
        return day + 'дня';
    }
}

//задача 4


let array_generator = function(quntity_array,quantity_digit){
    for(i = 0;i < quntity_array;i++){
      let arr = Array.from({length: quantity_digit}, () => Math.floor(Math.random() * 9));
      console.log(arr)
      console.log(arr.reduce((a ,b) => a + b, 0 ));
}
}

console.log(array_generator(5,3));