//задача 1

let find_sum_natural_number = function(n){
    // 3 = 2+1
    //
    //sum = (5 * (5 + 1) / 2 = (5 * 6) / 2) = 15
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

let return_day_by_number= function(day){
    if (day <=21){
        return day+'дней';
    }
    if (day >=22){
        return day + 'дня';
    }
}

//задача 4
