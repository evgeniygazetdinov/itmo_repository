
class Validator{
    //#_rules приватные свойства 
    _rules = null;
    _messages = null;
    _succes_messages = null;
    _error_messages = null;

    get rules(){
        return this._rules;
    }
    get _messages(){
        return this._messages;
    }
    get _succes_messages(){
        return this._succes_messages;
    }
    get _error_messages(){
        return this._error_messages;
    }
    set rules(value){
       this._rules = value;
    }
    set _messages(value){
       this._messages = value;
    }
    set _succes_messages(func){
       this._succes_messages = func;
    }
    set _error_messages(func){
       this._error_messages = func;
    }
    constructor(form){
        this._form = form;
        this._form.addEventListener('submit',this.validate.bind(this));
    }
    get form(){
        return this._form
    }
    set form(value){
        this._form = value;
    }
    init(settings){
        rules = settings.rules;
        messages = settings.messages;
        success_handler = settings.success_handler;
        error_handler = settings.error_handler;
    }
    //qwe
    //3 > 4
    minLength(elem_value, rules_value){
        return elem_value.length >= rules_value;
    }
    maxLength(elem_value, rules_value){
        return elem_value.length <= rules_value;
    }
    required(elem_value){
        return elem_value.length > 0 ;
    }
    req_match(elem_value,rule_value){
        return rules_value.test(elem_value);
    }
    validate(event){
        event.preventDefault();
        console.log('sended');
        let elements = form.elements;
        for (let elem of elements){
            //login
            //password
            //name
            //comment
            //undefined
            if (elem.dataset.validate){
                let rules_value = rules(elem.dataset.validate);
                console.log(rules_value);
                for(let rule in rules){
                    console.log(rule);
                    if(this[rule](elem.value,rules_value[rule])){
                    //вызов
                    this['minLength']()
                    error_handler(form);
                    return;
                }

            }
        }
        success_handler(forms)
    }
}
let form = document.forms.validate;
console.log(form);
let validator = new Validator(form);

let rules = {

    login:{
        minLength: 4,
        maxLength: 18
    },
    password:{
        minLength: 8,
    },

    name:{
        required: true
    },
    comment:{
        reg_math: /comment/
    }
};

let messanges = {
    login:{
        minLength:'Mинимум 4 символа'
    },
    name:{
        required: "Поле обязательное для заполнения"
    }
};

let success_handler = function(form){
    // в случае успешного заполнения формы

    console.log('')
} ;   
let error_handler = function(form){
    // в случае успешного заполнения формы

    console.log('')
};    



validator.init({
    rules: rules,
    messages: messages,
    success_handler: success_handler,
    error_handler: error_handler
})