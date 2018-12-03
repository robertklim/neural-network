function sigmoid(x) {
    return 1 / (1 + Math.exp(-x));
}

class NeuralNetwork {
    constructor(input_nodes, hidden_nodes, output_nodes) {
        this.input_nodes = input_nodes;
        this.hidden_nodes = hidden_nodes;
        this.output_nodes = output_nodes;

        // weights between input and hidden
        this.weights_ih = new Matrix(this.hidden_nodes, this.input_nodes);
        // weights betweew hidden and output
        this.weights_ho = new Matrix(this.output_nodes, this.hidden_nodes);
        this.weights_ih.randomize();
        this.weights_ho.randomize();

        // hidden layer bias
        this.bias_h = new Matrix(this.hidden_nodes, 1);
        // output layer bias
        this.bias_o = new Matrix(this.hidden_nodes, 1);
        this.bias_h.randomize();
        this.bias_o.randomize();
    }

    feedforward(inputs_array) {
        // generate hidden outputs
        let inputs = Matrix.fromArray(inputs_array);
        let hidden = Matrix.multiply(this.weights_ih, inputs);
        hidden.add(this.bias_h);
        // activation function
        hidden.map(sigmoid);

        // generate output
        let outputs = Matrix.multiply(this.weights_ho, hidden);
        outputs.add(this.bias_o);
        // activation function
        outputs.map(sigmoid);

        return outputs.toArray();
    }

    train(inputs, targets) {
        let outputs = this.feedforward(inputs);

        // convert array to Matrix object
        outputs = Matrix.fromArray(outputs);
        targets = Matrix.fromArray(targets);

        // calculate error
        // ERROR = TARGETS - OUTPUTS

        // calculate output errors
        let output_errors = Matrix.subtract(targets, outputs);

        // calculate hidden layer errors
        // simplify by using weights only, not (w1/w1+w2+...+wn) * e1
        let weights_ho_t =  Matrix.transpose(this.weights_ho);
        let hidden_errors = Matrix.multiply(weights_ho_t, output_errors);
        hidden_errors.print();

        // outputs.print();
        // targets.print();
        // output_error.print();
    }

}