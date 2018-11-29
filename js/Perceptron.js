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

// activation function
function sign(n) {
    if (n >= 0) {
        return 1;
    } else {
        return -1;
    }
}