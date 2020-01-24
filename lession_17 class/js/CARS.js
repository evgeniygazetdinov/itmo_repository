class Auto{
    constructor(brand,color,weels,need){
        this._brand = brand;
        this._color = color;
        this._weels = weels;
        this._need = need;
    }
    set color(color){
        this._color = color;
    }
    set weels(weels){
        this._weels = weels;
    }
    set _need_in_service(need){
        this._need = need;
    }
    get color(){
        return this._color ;
    }
    get weels(){
        return this._weels;
    }
    get _need_in_service(){
        return this._need; 

    }
 
}