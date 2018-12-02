let nn;

function setup() {
    nn = new NeuralNetwork(3, 4, 2);
    let a = new Matrix(3, 3);
    let b = new Matrix(3, 2);
    a.randomize();
    b.randomize();
    console.table(a.matrix);
    console.table(b.matrix);
    let c = a.multiply(b);
    console.table(c.matrix);
    let d = a.transpose();
    console.table(d.matrix);
}

function draw() {

}