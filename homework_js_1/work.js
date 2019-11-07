
//1.определить четное оно или нет
let number = 4;
if (number%2 ===0){
    console.log("even");
}
else{
    console.log("odd");
}
//2.ближайщее число к 10

let m = 4,3;
let n = 11,3;
let target = 10;
if (n<target || m <target){
    console.log(n);
    return n;
}
//3.для нахождени паралелипипеда
function find_p(height,length,width){
    p =  2*(length * height + height * width + length * height)
    return p;

}
