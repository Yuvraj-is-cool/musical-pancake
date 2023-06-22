function setup(){
    video=createCapture(VIDEO);
    video.hide();
    canvas=createCanvas(480,380);
    canvas.center();
}
function start(){
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status:Detecting Objects";
}
function modelLoaded(){
console.log("Model is loaded");
status=true;
}