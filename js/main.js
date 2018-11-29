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
