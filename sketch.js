let size, bredde, hojde, rounded;
let seed = 0;
let effekt = 0;
let orange = "#DFA05E";
let gul = "#FCDD64";

let cols = 16;
let rows = 10;
let antal = rows;

function setup() {
  cnv = createCanvas(1210, 708);
  cnv.parent("main");

  setupControls();

  rectMode(CENTER)

  const createControl = document.getElementById("create");
  createControl.addEventListener("click", () => {
    randomizeParameters();
  });

}

function draw() {
  background(gul);

  fill(orange);
  noStroke();
  rect(width/2, 100, bredde*size, hojde*size, rounded);
}