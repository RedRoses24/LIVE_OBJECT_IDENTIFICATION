img="";
function setup(){
    canvas=createCanvas(600, 500);
    canvas.center();
}
function preload(){
    img=loadImage("book.png");
}
function draw(){
image(img, 0, 0, 600, 500);
fill("red");
stroke("red");
noFill();
rect(145, 120, 400, 300);
text("BOOK", 155, 150);
textSize(20);
}