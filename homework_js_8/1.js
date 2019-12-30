function createPlace(order, name, width, height, color) {
  let place = document.getElementsByTagName(name)[order];
  place.width = width;
  place.height = height;
  let ctx = place.getContext('2d');
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, 900, 600);
  return ctx
}
function findRandomCoordinates(place_on){
    let specific_number = Math.floor(Math.random() * 1001);//find random number by 1000
    if((place_on - 128) <= specific_number){
        return specific_number;
    }
    findRandomCoordinates(place_on)
}

function updateScore(){

}



function draw_image(obj,ctx1,...x1) {      //отрисовка объектов
    let img = new Image();
    img.src = 'img/' + obj.img;
    img.onload = () => {
        if(ctx1===1)                    //отрисовка объекта игры
        {
            ctx.drawImage(img,obj.x + x1, obj.y, obj.width, obj.height  );
        }
        if(ctx1===2)                    //отрисовка объекта счета
        {
            ctx2.drawImage(img,obj.x + x1, obj.y, obj.width, obj.height );
        }
    }
}

function move(obj, event) {
  if (event.code === "KeyW" && (obj.y >= 1 )) {
    clearImage(obj);
    obj.y -= 20;
    draw_image(obj,1);
  }
  if (event.code === "KeyS" && (obj.y <= 440 )) {
    console.log(obj.y)
    clearImage(obj);
    console.log('переместить вниз');
    obj.y += 20;
    draw_image(obj,1);
  }
  if (event.code === "KeyA" && (obj.x >=1)) {
    clearImage(obj);
    console.log('переместить влeво');
    obj.x -= 25;
    draw_image(obj,1);
  }
  if (event.code === "KeyD" && (obj.x <=725)) {
    console.log(obj.x)
    clearImage(obj);
    obj.x += 25;
    draw_image(obj,1);
  }
}
//only 


let ctx =createPlace(1, 'canvas', 900, 600, 'green');
let score_ctx = createPlace(0, 'canvas', 900, 100, 'red');
let canvas = document.getElementsByTagName('canvas')[0];
let score_canvas = document.getElementsByTagName('canvas')[1];

//что рисовать 
let tiger = {
  img: 't.png',
  x: 0,
  y: 0,
  width: 128,
  heigth: 128
};
let rabbit = {
  img: 'r.png',
  x: 720,//findRandomCoordinates(canvas.width),
  y: 300,//findRandomCoordinates(canvas.height),
  width: 128,
  height: 128
};
let dead_rabit ={
  img: 'd_r.png',
  x:1 ,
  y: 1,
  width: 64,
  height:64,
}
function clearImage(obj) {
  ctx.fillRect(obj.x, obj.y, obj.width, obj.height);
}
//draw_image(tiger);
//w
//a
//d
//s
draw_image(rabbit);
document.addEventListener('keydown', move.bind(document, tiger));
