let perceptron;
let points = new Array(100);

function setup() {
    createCanvas(600, 600);

    // initiate training set
    for (let i = 0; i < points.length; i++) {
        points[i] = new Point();
    }

    perceptron = new Perceptron(2);
    perceptron.printWeights();

    let inputs = [random(-1, 1), random(-1, 1)];
    console.log('inputs:');
    console.table(inputs);

    console.log('guess:');
    console.log(perceptron.guess(inputs));

}

function draw() {
    background(245);

    // diagonal line
    stroke(0);
    line(0, 0, width, height);

    // show training set
    for (let i = 0; i < points.length; i++) {
        points[i].show();
    }

}

// activation function
function sign(n) {
    if (n >= 0) {
        return 1;
    } else {
        return -1;
    }
}

// perceptron class
class Perceptron {
    constructor(weightsNum) {
        this.weights = new Array(weightsNum);
        this.initiateWeights();
    }

    initiateWeights() {
        for (let i = 0; i < this.weights.length; i++) {
            this.weights[i] = random(-1, 1);
        }
    }

    guess(inputs) {
        let sum = 0;
        for (let i = 0; i < this.weights.length; i++) {
            sum += inputs[i] * this.weights[i];
        }
        console.log(sum);
        let output = sign(sum);
        return output;
    }

    printWeights() {
        console.log('weights:');
        console.table(this.weights);
    }

    getWeight(i) {
        return this.weights[i];
    }

}
