class Human {
    constructor(name){
        this._name = name;
        this._dog = dog;
    }
    set dog(dog){
        this._dog = dog;
    }
    get dog(){
        return this._dog;

    }
    train_dog(command){
        this._dog.learn_command(command);
    }
    ask_command(command){
        this._dog.execute_command(command);
    }

}