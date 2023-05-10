song=""

function preload(){
  song=loadSound("m.mp3")

}

scorerightW=0;
scoreleftW=0;

rightwristX=0;
rightwristY=0;

leftwristX=0;
leftwristY=0;


function setup(){
  canvas=createCanvas(400,300)
  canvas.center()
  webcam=createCapture(VIDEO)
  webcam.hide()

  poseNet=ml5.poseNet(webcam,modelLoaded);
  poseNet.on('pose',gotPoses)
}
function modelLoaded(){
 console.log("mode Loaded succesfully")
}

function gotPoses(result){
  if(result.length>0){
    console.log(result);
    scorerightW = result[0].pose.keypoints[10].score;
    scoreleftW= result[0].pose.keypoints[9].score;
  console.log("scorerightw="+scorerightW + "scoreleftw="+scoreleftW);

    rightwristX=result[0].pose.rightWrist.x;
    rightwristY=result[0].pose.rightWrist.y;
    console.log("rightwristX = "+rightwristX + "rightwristy = "+rightwristY);

    leftwristX=result[0].pose.leftWrist.x;
    leftwristY=result[0].pose.leftWrist.y;
  console.log("leftwristX= "+ leftwristX +"leftwristY=" + leftwristY);

    
  }
  
  
}

function draw(){
 image(webcam,0,0,400,300)
}

function play(){
  song.play();
  song.setVolume(1);
  song.rate(1);
}