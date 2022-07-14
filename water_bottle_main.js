img="";
function setup(){
    canvas=createCanvas(600, 500);
    canvas.center();
}
function preload(){
    img=loadImage("water_bottle.jpeg");
}
function draw(){
image(img, 0, 0, 600, 500);
fill("red");
stroke("red");
noFill();
rect(245, 120, 300, 360);
text("WATER BOTTLES", 250, 150);
textSize(20);
}