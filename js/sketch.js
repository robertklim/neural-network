let nn;

function setup() {
    nn = new NeuralNetwork(3, 4, 2);
    let a = new Matrix(2, 3);
    let b = new Matrix(3, 2);
    a.randomize();
    a.randomize();
    a.print();
    b.print();

}

function draw() {

}