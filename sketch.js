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
}

function draw() {
    background(0);
    orbitControl();
    translate(0,150);
    model(porky);

}