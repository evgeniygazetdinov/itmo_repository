class Dog extends Animal{
    //наследуют от animal
    constructor(name){
        super(name);
        this._commands = []
    }
    learn_command(command){
        console.log(`{this.name} выучил команду ${_command}`)
        this._commands.push(command);
    }
    execute_command(command){
        if(!this._commands.includes(command)){
            console.log(`нет такой команды`);
        }
    console.log(`${this.name} выполнил команду`)
    }
}