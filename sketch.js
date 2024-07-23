let porky;
let options = {
  normalize: true,
  successCallback: null,
  failureCallback: console.log("Not Loaded"),
  fileType: '.obj'
};

function preload() {
  porky = loadModel('./assets/porky.obj', options);
}

function setup(){
    createCanvas(1920,800, WEBGL);
    normalMaterial();
    frameRate(60);
}

function draw() {
    background(0);
    orbitControl();

    push();
    translate(0,150);
    rotateWithFrameCount();
    model(porky);
    pop();
}

function rotateWithFrameCount() {
//   rotateZ(.02*frameCount);
//   rotateX(.02*frameCount);
  rotateY(.02*frameCount);
}