
//1.определить четное оно или нет
let number = 4;
if (number%2 ===0){
    console.log("even");
}
else{
    console.log("odd");
}
//2.ближайщее число к 10

function find_number_closer(first_number,second_number,target){
    m = Math.abs(first_number - 10); 
    n = Math.abs(second_number - 10);
    return m < n ? first_number : second_numbern;
}
//3.для нахождени паралелипипеда
function find_p(height,length,width){
    if (height > length){
        console.log('cлишком большая высота');
    }
    if (length > height){
        console.log('cлишком большая ширина');
    }
    p =  2*(length * height + height * width + length * height)
    return p;

}
