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

 
 
 
 
 function generate_goods(data,parentElem){
    console.log('generateCards');
   for(let item in data){
    let div = document.createElement('div');
    card.classList.add('card');
    let title = document.createElement('h2');
    title.innerText =  data['item']['title'];
    let pic = document.createElement(img);
    pic.setAttribute('src','img/'+data['item']['img'])
    let price = document.createElement('p');
    price.innerText = `${data['item']['price']}`
    card.append(title,pic,price);
    }

}
let g= document.querySelector('.goods')
generate_goods(goods,g);
/*
<div class="card">
<h2>Title</h2>
<img src="img/piano.jpg">
<p>Price</p>
</div>
<div class="card">
<h2>Title</h2>
<img src="img/guitar.jpg">
<p>Price</p>
</div>
<div class="card">
<h2>Title</h2>
<img src="img/drum.jpg">
<p>Price</p>
</div>
<div class="card">
<h2>Title</h2>
<img src="img/flute.jpg">
<p>Price</p>
</div>*/