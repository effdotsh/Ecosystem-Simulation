var x = 500;
var speed = 500;
var cnv;
var moveUpdate = Date.now();
function setup() {
    cnv = createCanvas(windowWidth, windowHeight);
    cnv.position(0, 0);
}
function draw() {
    background(0);
    ellipse(x, height / 2, 50, 50);
    x += ((Date.now() - moveUpdate) / 1000) * speed;
    if (x < 25) {
        speed *= -1;
        x = 25;
    }
    if (x > width - 25) {
        speed *= -1;
        x = width - 25;
    }
    moveUpdate = Date.now();
}
//# sourceMappingURL=../src/src/main.js.map