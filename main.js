var noseX=0
var noseY=0
var moustache;


function preload(){
    moustache = loadImage("moustache3.png")
}
function modelLoaded(){
    console.log("poseNetis intialised")
    
}

function draw(){
image(video,0,0,400,300);
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center()
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide()
    poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}
function gotPoses(results){
    if(results.length > 0){
     
        console.log(results)
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
       
        
    }
   
}

function draw(){
    image(video,0,0,400,300);
    image (moustache,noseX+35,noseY-10,50,50)






  
}

function snapshot(){
    save("images.jpg")
}

