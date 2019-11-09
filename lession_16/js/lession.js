let canvas = document.getElementsByTagName('canvas')[0];
console.log(canvas);
canvas.width = 900;
canvas.height = 600;
let ctx = canvas.getContext('2d');
ctx.fillStyle = 'green';
ctx.fillRect(0,0,900,600);
//что рисовать 
let tiger = {
    img :'tiger.png',
    x: 22,
    y: 15,
    width: 128,
    heigth: 128
}
let rabbit = {
    img
}
function clearImage(obj){
    ctx.fillRect(obj.x,obj.y,obj.width,obj.height)
}
function draw_image(obj){
    let img = new Image();
    img.src = 'img/'+obj.img;
    //привязка функции к событию
    img.onload = () =>{
        //метод контекста
        ctx.drawImage(img, obj.x, obj.y,obj.width,obj.heigth);
    }

}

draw_image(tiger);
//w
//a
//d
//s
function move(obj,event){
    if(event.code ==="KeyW"){
        clearImage(obj);
        console.log('переместить вверх');
        obj.y-=2;
        draw_image(obj);

    }
    if(event.code ==="KeyS"){
        clearImage(obj)
        console.log('переместить вниз');
        obj.y +=2;
        draw_image(obj);
    }
    if(event.code ==="KeyA"){
        clearImage(obj)
        console.log('переместить влeво');
        obj.x +=2;
        draw_image(obj)
 
    }
    if(event.code ==="KeyD"){
        clearImage(obj);

        console.log('переместить вправо');
        obj.x -=2;
        draw_image(obj)
    }
}


document.addEventListener('keydown',move.bind(document,tiger))