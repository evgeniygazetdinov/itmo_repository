class Validator {
    // приватные свойства (свойства недоступны все класса)
    // #prop_name = "Prop value";
    // свойства
    _rules = null;
    _messages = null;
    _successHandler = null;
    _errorHandler = null;
    constructor(form){
        this._form = form;
        this._form.addEventListener("submit", this.validate.bind(this));
    }

    get form(){
        return this._form;
    }
    set form(form){
        this._form = form;
    }
    get rules(){
        return this._rules;
    }
    set rules(value){
        this._rules = value;
    }
    get messages(){
        return this._messages;
    }
    set messages(value){
        this._messages = value;
    }
    get successHandler(){
        return this._successHandler;
    }
    set successHandler(func) {
        this._successHandler = func;
    }
    get errorHandler(){
        return this._errorHandler;
    }
    set errorHandler(func) {
        this._errorHandler = func;
    }


    init(settings){
        rules = settings.rules;
        messages = settings.messages;
        successHandler = settings.successHandler;
        errorHandler = settings.errorHandler;
    }

    minLength(elemValue, ruleValue){
        /*console.log("метод minLength: ",
            "пользователь ввел: " + elemValue,
            "правило ruleValue: " + ruleValue);
        */    
        return elemValue.length >= ruleValue;
    }
    maxLength(elemValue, ruleValue) {
       /* console.log("метод maxLength:",
            "пользователь ввел: " + elemValue,
            "правило ruleValue: " + ruleValue);
            */
        return elemValue.length <= ruleValue;
    }
    required(elemValue){
       /*
        console.log("метод required:",
            "пользователь ввел: " + elemValue);
            */
        return elemValue.length > 0;
    }
    reg_match(elemValue, ruleValue) {
        /*
        console.log("метод reg_match:",
            "пользователь ввел: " + elemValue,
            "правило ruleValue: " + ruleValue);
        */    
        return ruleValue.test(elemValue);
    }

    validate(event){
        event.preventDefault();
        let elements = form.elements;
        let counter = [];
        for (let elem of elements){
             //console.log(elem.dataset.validate,);
            if (elem.dataset.validate){
                let rulesValues = rules[elem.dataset.validate];
                 console.log(rulesValues);
                // {
                //     minLength: 4,
                //     maxLength: 18
                // } и тд
                for (let rule in rulesValues){
                    // console.log(rule);
                    // minLength
                    // maxLength и тд

                    if(!this[rule](elem.value, rulesValues[rule])){
                      
                        // this["minLength"](val, rule);
                        // this.minLength(val, rule);
                        // TODO: вместо errorHandler и return
                        //  выводить сообщение об ошибке
                        //  и обновлять счетчик ошибок (счетчик может быть переменной,
                        //  массивом, объектов)
                        //error_place.style.backgroundColor = 'red';
                        //error_place.innerText = `ошибок ${counter.length}:`
                        //for(let i=0;i<counter.length;i++){
                        //    form = document.getElementsByTagName('form')[0];
                        //    let er = document.createElement('p');
                        //    er.innerText = counter[i];
                       //     form.append(er);

//                        }
//                        messages = this[rule];
                        let place = elem.dataset.validate;
                        let cause = messages[place];
                        console.log(cause);
                        errorHandler(form,counter,place);
                    }
                }
            }
        }
        // TODO: проверять счетчик ошибок,
        //  если ошибок, нет вызывать successHandler(form);
        //  если есть errorHandler(form);
    }
}

let form = document.forms.validate;
let validator = new Validator(form);
let rules = {
    login: {
       minLength: 4,
       maxLength: 18
    },
    password: {
       minLength: 8
    },
    name: {
        required: true
    },
    comment: {
        reg_match: /comment/
    }
};

let messages = {
    login: {
        minLength: "Минимум 4 символа"
    },
    name: {
        required: "Поле обязательно для заполнения"
    }
};
let handler = (text, color) =>{
    let error_place = document.getElementById('message');
    let p = document.createElement('p');
    p.innerText = text;
    p.style.backgroundColor = color;
    error_place.append(p);

}


let successHandler = (form) => {
    console.log("Действие " +
        "в случае успешного заполнения формы");
    handler('форма заполнена верно', 'green');
};

let errorHandler = (form,counter,place) => {
  /*  console.log("Действие" +
        " в случае ошибок в заполнении формы");
*/
console.log(counter);
   handler(`в ${place} есть ошибки`,'red',);

};

validator.init({
    rules: rules,
    messages: messages,
    successHandler: successHandler,
    errorHandler: errorHandler
});
