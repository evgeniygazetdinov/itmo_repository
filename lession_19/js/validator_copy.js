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
        return elemValue.length >= ruleValue;
    }
    maxLength(elemValue, ruleValue) {
        return elemValue.length <= ruleValue;
    }
    required(elemValue){
        return elemValue.length > 0;
    }
    reg_match(elemValue, ruleValue) {
        return ruleValue.test(elemValue);
    }

    validate(event){
        event.preventDefault();
        let elements = form.elements;
        for (let elem of elements){
            // console.log(elem.dataset.validate);
            // login
            // password
            // name
            // comment
            // undefined
            if (elem.dataset.validate){
                let rulesValues = rules[elem.dataset.validate];
                // console.log(rulesValues);
                // {
                //     minLength: 4,
                //     maxLength: 18
                // } и тд
                for (let rule in rulesValues){
                    console.log(rule);
                    // minLength
                    // maxLength и тд
                    if(!this[rule](elem.value, rulesValues[rule])){
                        // this["minLength"](val, rule);
                        // this.minLength(val, rule);
                        errorHandler(form);
                        return;
                    }
                }
            }
        }
        successHandler(form);
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

let successHandler = (form) => {
    console.log("Действие " +
        "в случае успешного заполнения формы");
};

let errorHandler = (form) => {
    console.log("Действие" +
        " в случае ошибок в заполнении формы");
};

validator.init({
    rules: rules,
    messages: messages,
    successHandler: successHandler,
    errorHandler: errorHandler
});