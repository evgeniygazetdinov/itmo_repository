let taksa = new Dog('такса');
taksa.health = 25;
taksa._attack_score = 20;

console.log(taksa);
let dog = new Dog('Пес');

taksa.attack(dog);


let sania = new Human('саня');
sania.dog = taksa;
sania.ask_command('сидеть');



let audi = new Auto('audi_tt','green','super','change_weels');
let auto_service = new Garage(1);
let bmw = new Auto('bmw','black','super','change_weels');

console.log(auto_service);
console.log(audi);
console.log(bmw);
console.log(auto_service);