function Rabit(){
   this._name = 'not_name'; 


   this.jump = function(){
    console.log(`${this._name} прыгает`);
}


}
let Rabit1 = new Rabit();
Rabit1._name = 'первый кролик';
console.log(Rabit1);
let Rabit2 = new Rabit()
console.log(Rabit2);

Rabit.prototype.eat = function(food){
    console.log(`${this._name} ecт ${food}`);
}
console.log(Rabit1.eat('nhfde'));
console.log(Rabit1.jump());
