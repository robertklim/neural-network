let nn;

function setup() {
    // this is the goal
    nn = new NeuralNetwork(2, 2, 1);
    let input = [1, 0];
    let output = nn.feedforward(input);
    console.table(output);
}

function draw() {

}