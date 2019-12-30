function createPlace(order, name, width, height, color) {
  let place = document.getElementsByTagName(name)[order];
  place.width = width;
  place.height = height;
  let ctx = place.getContext('2d');
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, 900, 600);
  return place, ctx;
}
function findRandomCoordinates(place_on){
    let specific_number = Math.floor(Math.random() * 1001);//find random number by 1000
    if((place_on - 128) <= specific_number){
        return specific_number;
    }
    findRandomCoordinates(place_on)
}

function holder(){

}


function draw_image(obj) {
  let img = new Image();
  img.src = 'img/' + obj.img;
  //привязка функции к событию
  img.onload = () => {
    //метод контекста
    ctx.drawImage(img, obj.x, obj.y, obj.width, obj.heigth);
  };
}
function move(obj, event) {
  if (event.code === "KeyW") {
    clearImage(obj);
    console.log('переместить вверх');
    obj.y -= 20;
    draw_image(obj);
  }
  if (event.code === "KeyS") {
    clearImage(obj);
    console.log('переместить вниз');
    obj.y += 20;
    draw_image(obj);
  }
  if (event.code === "KeyA") {
    clearImage(obj);
    console.log('переместить влeво');
    obj.x -= 25;
    draw_image(obj);
  }
  if (event.code === "KeyD") {
    clearImage(obj);
    console.log('переместить вправо');
    obj.x += 25;
    draw_image(obj);
  }
}
let canvas, ctx = createplace(1, 'canvas', 900, 600, 'green');
let score_canvas, score_ctx = createplace(0, 'canvas', 900, 100, 'red');
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
  x: 50,
  y: 50,
  width: 128,
  height: 128
};
function clearImage(obj) {
  ctx.fillRect(obj.x, obj.y, obj.width, obj.height);
}
draw_image(tiger);
//w
//a
//d
//s
draw_image(rabbit);
document.addEventListener('keydown', move.bind(document, tiger));
