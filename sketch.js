let porky;
let options = {
  normalize: false,
  successCallback: null,
  failureCallback: console.log("Not Loaded"),
  fileType: '.obj'
};

function preload() {
  porky = loadModel('./assets/porky.obj', options);
}

function setup(){
    createCanvas(1920,800, WEBGL);
    frameRate(60);
}

function draw() {
    background(0);
    orbitControl();
    
    ambientLight(10, 0, 10,2);
    let c = color(251, 255, 255);
    directionalLight(c, 0, 1, 0);

    c = color(255, 32, 110);
    directionalLight(c, 0, -1, 0);
    noStroke();
    
    push();
    translate(0,150);
    rotateY(.02*frameCount); 
    model(porky);
    pop();
}
