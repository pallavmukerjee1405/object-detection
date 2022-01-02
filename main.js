img="";

function preload(){
    img=loadImage("dog_cat.jpg");
}

function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
}

function draw(){
    image(img,0,0,640,420);
    fill('#FF0000');
    text("Dog",50,75);
    noFill();
    stroke('#FF0000');
    rect(48,65,280,340);
}