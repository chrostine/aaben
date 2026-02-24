let kolonner = 16;
let rækker = 10;
let antal = kolonner;
let size = 10;
let seed = 0;

function setup() {
  cnv = createCanvas(1132, 800);
  cnv.parent("main");

  setupControls();

  const createControl = document.getElementById("create");
  createControl.addEventListener("click", () => {
    randomizeParameters();
  });
}

function draw() {
  background(255);
}