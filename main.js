var canvas = "";
var webcam = "";
var model = "";
var noseX = 0;
var noseY = 0;
var clown = "";

function preload(){
clown = loadImage("m.png");
}

function setup(){
canvas = createCanvas(450,350);
canvas.center();
webcam = createCapture(VIDEO);
webcam.size(450,350);
webcam.hide();
model = ml5.poseNet(webcam,modelLoaded);
model.on('pose',fletcherthefetcher);
}

function draw(){
image(webcam,0,0,450,350);
//fill(255,0,0);
//stroke(255,0,0);
//circle(noseX,noseY,20);
image(clown,noseX-24,noseY-5,40,40);
}

function takeSnapshot(){
    save("your_picture.png");
}

function modelLoaded(){
    console.log("mission accomplished");
}

function fletcherthefetcher(store){
if(store.length>0){
console.log(store);
console.log("nose x = "+ store[0].pose.nose.x);
console.log("nose y = "+ store[0].pose.nose.y);
noseX = store[0].pose.nose.x;
noseY = store[0].pose.nose.y;
}
}