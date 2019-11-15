class Animal {
//вызывается в момент создания
constructor(name){
    this._name = name;
    this._health = 15;
    this._attack_score = 0;

}
set name(value){
    this._name = value;
}
get name(){
    return this._name;
}
eat(food){
    this.heath += 1;
    console.log(`eat ${food}`);
}
attack(otherAnimal){
    if(!(otherAnimal instanceof Animal)) return;
    console.log(`${this._name} напал на  ${otherAnimal.name}`);
    otherAnimal.heath -=this._attack_score;
}
}




 