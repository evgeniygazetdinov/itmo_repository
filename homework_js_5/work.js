let goods = {
    piano: {
        title: "Пианино",
        price: 3000,
        count: 25
    },
    guitar: {
        title: "Гитара",
        price: 1200,
        count: 40
    },
    drum: {
        title: "Барабаны",
        price: 2700,
        count: 12
    },
    flute: {
        title: "Флейта",
        price: 900,
        count: 50
    },
    harp: {
        title: "Арфа",
        price: 3400,
        count: 5
    }
};



let get_goods = function(obj,start_price,finish_price){
    values = {}
    for(let item in obj){
        if ((obj[item].price > start_price) && (obj[item].price < finish_price)){
            values[item] = obj[item]
        }
    }
    return values
}
console.log(get_goods(goods,1,1000))