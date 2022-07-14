img="";
function setup(){
    canvas=createCanvas(600, 500);
    canvas.center();
}
function preload(){
    img=loadImage("laptop.jpg");
}
function draw(){
image(img, 0, 0, 600, 500);
fill("red");
stroke("red");
noFill();
rect(145, 120, 315, 300);
text("LAPTOP", 155, 150);
textSize(20);
}