img="";
status_quo="";

function preload(){
    img=loadImage("dog_cat.jpg");
}

function setup(){
    canvas=createCanvas(640,420);
    canvas.center();

    object_detector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects";
}

function modelLoaded(){
    console.log('Model Loaded!');
    status_quo=true;
    object_detector.detect(img,gotResult);
}

function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
    }
}

function draw(){
    image(img,0,0,640,420);
    fill('#FF0000');
    text("Dog",50,75);
    noFill();
    stroke('#FF0000');
    rect(48,65,280,340);

    fill('#FF0000');
    text("Cat",320,120);
    noFill();
    stroke('#FF0000');
    rect(300,90,270,320);
}