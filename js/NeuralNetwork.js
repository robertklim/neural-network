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

    feedforward(input_array) {
        // generate hidden outputs
        let input = Matrix.fromArray(input_array);
        let hidden = Matrix.multiply(this.weights_ih, input);
        hidden.add(this.bias_h);
        // activation function
        hidden.map(sigmoid);

        // generate output
        let output = Matrix.multiply(this.weights_ho, hidden);
        output.add(this.bias_o);
        // activation function
        output.map(sigmoid);

        return output.toArray();
    }

}