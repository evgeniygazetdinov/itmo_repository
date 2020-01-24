class Garage{
    constructor(len_cars){
        this._box = []
        this._len_cars = len_cars;
    }

    get now_in_service(){

        return this._box;
    }
    set in_to_service(car){
        console.log('in box')
        this._box.push(car)
    }


    pawn_car(car,changed_color){
        console.log(`${this.car.color} цвет изменен на ${changed_color} ` );
        this.car.color = changed_color;
    }
    change_weels(car,changed_weels){
        console.log(`${this.car.weels} поменяны на ${сhanged_weels}` );
    }
}
 