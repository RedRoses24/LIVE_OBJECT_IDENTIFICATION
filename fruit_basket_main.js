img="";
function setup(){
    canvas=createCanvas(600, 500);
    canvas.center();
}
function preload(){
    img=loadImage("fruit_basket.jpg");
}
function draw(){
    image(img, 0, 0, 600, 500);
    fill("red");
    stroke("red");
    noFill();
    rect(65, 100, 480, 370);
    text("FRUIT BASKET", 70, 120);
    textSize(20);
    }