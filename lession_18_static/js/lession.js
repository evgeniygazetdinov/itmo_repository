class Utils{
    static version = 1;
    static sum(a, b){
        return a + b;
    }
    some_void(){
        console.log('some void');
    }
}


let res = Utils.sum(1, 4);
console.log(res);
console.log(Utils.version)

console.log(Utils);



class Apple{

    constructor(){
        this._age = Math.floor(Math.random() * 5);
        this._spoil = false;
        this._fail = false;

    }
    failDownFromTree(){
        this._fail = True;
    }
    spoilApples(){
        this._spoil = True;
    }
    get age(){
        return this.age;
    }

    set spoil(value){
        this._spoil = value
    }
    set fail(value){
        this._fail = value;
    }
    get spoil(){
        return this._spoil;

    }
}




class Tree{
    constructor(){
     this._trees = []
     this.generate_apples()
    }
    generate_apples(){
        let arr = Math.floor(Math.random() * 8 + 5);
        for (let i = 0; i < arr.length; i++){
        this._trees.push(new Tree);
        return arr;
    }
}
    apples(){
        return  this.apples.length;
    }
    getCountApples(){
        let counter = 0;
        for(let tree of this._trees){
            for(let apple of this._trees)
            if(!apple.spoil) counter++
        }
    return counter;
    }
    passDay(){
        if(!(this._days % 30)){
            for(let tree of this._trees){
                tree.apples.push(new Apple()); 
            }
        }
        this._days++;
    }
    for(let tree of this.apples){
        apples.age++;
        if(apple.age === 30){
            apple.failApples();
        }
        if(apple.age === 31){
            apple.spoilApples();
        }
        apple.age++;
    }
}



class Garden{
    this._threes = [];
    this._age = 
}



let garden = new Garden();
garden.getCountApples();
for (let i = 0; i< 100;i++){
    garden.passDay()
}
garden.passDay();
garden.passDay();
garden.getCoundApples();




