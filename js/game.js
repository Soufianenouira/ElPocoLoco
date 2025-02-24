let canvas;
let world;
let keyboard = new Keyboard();
function init(){
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);    
}
function widthUpdate(){
    //canvas = document.getElementById('canvas').style.width = window.innerWidth;
}

window.addEventListener("keydown", (e) =>{
    keyboard[e.code] = true;
    
});

window.addEventListener("keyup", (e) =>{
    keyboard[e.code] = false;
    if(e.code == 'KeyD'){
        keyboard.D = true;
    } 
        
});

