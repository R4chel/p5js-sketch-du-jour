let art;

let seed;
let canvasSize;
// canvasSize = 1000;


function setup() {
    seed = seed === undefined ? floor(random(1000000)) : seed;
    let canvasWidth = canvasSize === undefined ? windowWidth : canvasSize;
    let canvasHeight= canvasSize === undefined ? windowHeight: canvasSize;
    randomSeed(seed);
    angleMode(RADIANS);
    ellipseMode(RADIUS);
    rectMode(RADIUS);
    let canvas = createCanvas(canvasWidth, canvasHeight); 
    canvas.mouseClicked(canvasMouseClicked);
    art = new Art();

    art.addShape();
}

function keyPressed(event){
    if(isFinite(event.key)){
        art.keyPress(parseInt(event.key));
    }
}

function canvasMouseClicked() {
    art.addShape({x:mouseX, y:mouseY});
}

function draw() {
    art.draw();
    art.update();
}


