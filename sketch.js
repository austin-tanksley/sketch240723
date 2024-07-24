let porky;
let font;
let loaded = false;
function toggle(){
  loaded = true;
}
let options = {
  normalize: false,
  successCallback: null,
  failureCallback: console.log("Not Loaded"),
  fileType: '.obj'
};


function preload() {
  porky = loadModel('./assets/porky.obj', options,);
  font = loadFont('./assets/SuisseIntl-Regular-WebM.otf');
}

function setup(){
    createCanvas(windowWidth-10,windowHeight-10, WEBGL);
    frameRate(60);
      if (!loaded){
        fill(220);
        textFont(font);
        textAlign(CENTER, CENTER);
        textSize(24);
        textStyle(BOLD)
        text("more loading..",0 , 0);
    }
}

function draw() {


    background(0);

    orbitControl();
    
    

    ambientLight(10, 0, 10,2);
    let c = color(251, 220, 255);
    directionalLight(c, 1, 0, 0);

    c = color(255, 32, 110);
    directionalLight(c, -1, 0, 0);
    noStroke();
    toggle();
  
    push();
    translate(0,150);
    rotateY(.02*frameCount); 
    model(porky);
    pop();

    toggle();
    

    
}
