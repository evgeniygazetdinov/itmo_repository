
function findRandomCoordinates(place_on){
  let specific_number = Math.floor(Math.random() * 800);//find random number by 1000
  if((place_on - 200) >= specific_number){
    console.log(specific_number);  
    return specific_number;
      
  }
  return Math.abs(place_on - Math.abs(specific_number))
}

let score = document.getElementsByTagName('canvas')[0]
score.width = 900;
score.height = 50;

let score_ctx = score.getContext("2d");
score_ctx.fillStyle = "red";
score_ctx.fillRect(0,0,900, 600);
let canvas = document
    .getElementsByTagName("canvas")[1];

canvas.width = 900;
canvas.height = 600;

let ctx = canvas.getContext("2d");
ctx.fillStyle = "green";
ctx.fillRect(0,0,900, 600);





let tiger = {
    img: 't.png',
    x: 22,
    y: 15,
    width: 128,
    height: 128
};
let rabbit = {
  img: 'r.png',
  x: findRandomCoordinates(canvas.width),
  y: findRandomCoordinates(canvas.height),
  width: 128,
  height: 128
};

function drawImg(obj) {
    let img = new Image();
    img.src = 'img/' + obj.img;

    img.onload = () => {
        ctx.drawImage(
            img,
            obj.x, obj.y,
            obj.width, obj.height
        );
    }
}


function move(obj, event) {
    // w - перемещение вверх
    // a - перемещение влево
    // d - перемещение вправо
    // s - перемещение вниз
    console.log(event.code);
    if (event.code === "KeyD" && (obj.x <= canvas.width -150)) {
        console.log(canvas.width,obj.x)
        clearImg(obj);
        obj.x += 20;
        drawImg(obj);
    } else if (event.code === "KeyA" && obj.x >= 0) {
        clearImg(obj);
        obj.x -= 20;
        drawImg(obj);
    } else if (event.code === "KeyW" && (obj.y >= 0 )) {
        clearImg(obj);
        obj.y -= 20;
        drawImg(obj);
    } else if (event.code === "KeyS" && (obj.y <= canvas.height -150)) {
        clearImg(obj);
        obj.y += 20;
        drawImg(obj);
    }
}

function clearImg(obj) {
    ctx.fillRect(obj.x, obj.y, obj.width, obj.height);
}

drawImg(tiger);
drawImg(rabbit);
document.addEventListener("keydown",
    move.bind(document, tiger));




