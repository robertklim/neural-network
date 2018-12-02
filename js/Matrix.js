class Matrix {
    constructor(rows, cols) {
        this.rows = rows;
        this.cols = cols;
        this.matrix = [];
        for (let i = 0; i < this.rows; i++) {
            this.matrix[i] = [];
            for (let j = 0; j < this.cols; j++) {
                this.matrix[i][j] = 0;
            }
        }
    }

    randomize() {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                this.matrix[i][j] = Math.floor(Math.random() * 10);
            }
        }
    }

    add(n) {
        if (n instanceof Matrix) {
            // element wise add
            for (let i = 0; i < this.rows; i++) {
                for (let j = 0; j < this.cols; j++) {
                    this.matrix[i][j] += n.matrix[i][j];
                }
            }
        } else {
            // scalar wise add
            for (let i = 0; i < this.rows; i++) {
                for (let j = 0; j < this.cols; j++) {
                    this.matrix[i][j] += n;
                }
            }
        }
    }

    multiply(n) {
        if (n instanceof Matrix) {
            // Matrix product
            if (this.cols != n.rows) {
                console.log('Columns of A must match rows of B');
                return undefined;
            }
            let a = this;
            let b = n;
            let result = new Matrix(a.rows, b.cols);
            for (let i = 0; i < result.rows; i++) {
                for (let j = 0; j < result.cols; j++) {
                    // Dot product
                    let sum = 0;
                    for (let k = 0; k < a.cols; k++) {
                        sum += a.matrix[i][k] * b.matrix[k][j];
                    }
                    result.matrix[i][j] = sum;
                }
            }
            return result;
            // Hadamard product - element wise multiply
            // for (let i = 0; i < this.rows; i++) {
            //     for (let j = 0; j < this.cols; j++) {
            //         this.matrix[i][j] *= n.matrix[i][j];
            //     }
            // }
        } else {
            // Scalar product - scalar wise multiply
            for (let i = 0; i < this.rows; i++) {
                for (let j = 0; j < this.cols; j++) {
                    this.matrix[i][j] *= n;
                }
            }
        }
    }

}