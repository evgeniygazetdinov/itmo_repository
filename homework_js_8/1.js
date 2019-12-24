let score = document.getElementsByName("score"); 
let score_canvas = document.getElementsByTagName("canvas")[1]; 
score_canvas.width = (window.screen.widt);
score_canvas.height = (window.screen.height);
let ctx = canvas.getContext("2d");
ctx.fillStyle = "red";
ctx.fillRect(0,0,canvas.screen.width,canvas.screen.height);
let game_field = document.getElementsByTagName("canvas")[0];
game_field.width = window.screen.width;
game_field.height = window.screen.height;

let game_context = game_field.getContext("2d");
game_context.fillStyle = "green";
game_context.fillRect(0,0,900, 600);
let point =0;
let point2 =0;                     

score.innerText="Счет: "+point2;       

let tiger = {                     
    img: 't.png',
    x: 22,
    y: 15,
    width: 128,
    height: 128
};

let rabbit = {                    
    img: 'r.png',
    x: corX,
    y: corY,
    width: 128,
    height: 128
};
let dead_rabbit2 = {                    
    img: 'dr.png',
    x: 0,
    y: 0,
    width: 64,
    height: 64
};

