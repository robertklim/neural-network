let nn;

// data for XOR
// [1, 0] -> [1]
// [0, 1] -> [1]
// [1, 1] -> [0]
// [0, 0] -> [0]
let training_data = [
    {
        inputs: [0, 1],
        targets: [1]
    },
    {
        inputs: [1, 0],
        targets: [1]
    },
    {
        inputs: [0, 0],
        targets: [0]
    },
    {
        inputs: [1, 1],
        targets: [0]
    },
];

function setup() {
    nn = new NeuralNetwork(2, 2, 1);
    
    // train
    for (let i = 0; i < 100000; i++) {
        let data = random(training_data);
        nn.train(data.inputs, data.targets);
    }

    // test
    console.table(nn.feedforward([1, 0]));
    console.table(nn.feedforward([0, 1]));
    console.table(nn.feedforward([0, 0]));
    console.table(nn.feedforward([1, 1]));


}

function draw() {

}