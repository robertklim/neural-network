let nn;

function setup() {
    // this is the goal
    nn = new NeuralNetwork(2, 2, 2);
    let inputs = [1, 0];
    let targets = [1, 0];
    // let output = nn.feedforward(inputs);
    nn.train(inputs, targets);
    //console.table(output);
}

function draw() {

}