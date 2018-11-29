let perceptron;

function setup() {
    createCanvas(600, 400);

    perceptron = new Perceptron(2);

    perceptron.printWeights();

}

function draw() {
    background(0);
}

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

    printWeights() {
        console.table(this.weights);
    }

    getWeight(i) {
        return this.weights[i];
    }

}
