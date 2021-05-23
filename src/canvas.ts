let cnv: p5.Renderer;
let moveUpdate = Date.now();

let depos: Food[] = [];

let ants: Ant[] = [];
let ant_tree: Ant[] = [];

let tick = 0;

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  cnv.position(0, 0);

  for (let i = 0; i < num_food; i++) {
    depos.push(new Food());
  }
  for (let i = 0; i < num_ants; i++) {
    let a = new Ant();
    ants.push(a);
    ant_tree.push(a);
  }
  textAlign(CENTER, CENTER);
  ellipseMode(RADIUS);
}
function draw() {
  tick++;
  scale(min(windowWidth / 1920, windowHeight / 975));

  background(128, 175, 73);

  gen_grid_lines();
  show_food();
  doAnts();
  depos.filter((depo) => depo.capacity > 0);
}

function getColor() {
  const randomInt = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  var h = randomInt(0, 360);
  var s = randomInt(42, 98);
  var l = randomInt(40, 90);
  return [h, s, l];
}

function keyPressed() {
  if (key == "s") {
    save(ant_tree, "tree.json");
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
