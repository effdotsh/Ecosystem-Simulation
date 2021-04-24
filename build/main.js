var Ant = (function () {
    function Ant(xs, ys) {
        if (xs === void 0) { xs = 0; }
        if (ys === void 0) { ys = 0; }
        this.x = xs;
        this.y = ys;
    }
    return Ant;
}());
var cnv;
var moveUpdate = Date.now();
var num_food = 10;
var depos = [];
function setup() {
    cnv = createCanvas(windowWidth, windowHeight);
    cnv.position(0, 0);
    for (var i = 0; i < num_food; i++) {
        depos.push(new Food(random(0, width), random(0, height), random(100, 500)));
    }
}
function draw() {
    background(0);
    for (var i = 0; i < depos.length; i++) {
        var f = depos[i];
        f.show();
        f.consume(1);
        if (f.capacity <= 10) {
            depos[i] = new Food(random(0, width), random(0, height), random(100, 500));
        }
    }
}
var Food = (function () {
    function Food(x, y, c) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (c === void 0) { c = 50; }
        this.x = x;
        this.y = y;
        this.capacity = c;
    }
    Food.prototype.show = function () {
        fill(255);
        ellipse(this.x, this.y, this.capacity, this.capacity);
    };
    Food.prototype.consume = function (amount) {
        if (amount > 0) {
            this.capacity -= amount;
        }
        if (this.capacity < 0) {
            this.capacity = 0;
        }
    };
    return Food;
}());
//# sourceMappingURL=../src/src/main.js.map