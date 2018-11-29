// known training set
class Point {
    constructor() {
        this.x = floor(random(width));
        this.y = floor(random(height));
        this.label;
        if (this.x > this.y) {
            this.label = 1;
        } else {
            this.label = -1;
        }
    }

    show() {
        stroke(0);
        if (this.label === 1) {
            fill(255);
        } else {
            fill(0);
        }
        ellipse(this.x, this.y, 4, 4);
    }

}