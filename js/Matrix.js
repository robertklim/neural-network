class Matrix {
    constructor(rows, cols) {
        this.rows = rows;
        this.cols = cols;
        this.data = [];
        for (let i = 0; i < this.rows; i++) {
            this.data[i] = [];
            for (let j = 0; j < this.cols; j++) {
                this.data[i][j] = 0;
            }
        }
    }

    randomize() {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                this.data[i][j] = Math.floor(Math.random() * 10);
            }
        }
    }

    add(n) {
        if (n instanceof Matrix) {
            // element wise add
            for (let i = 0; i < this.rows; i++) {
                for (let j = 0; j < this.cols; j++) {
                    this.data[i][j] += n.data[i][j];
                }
            }
        } else {
            // scalar wise add
            for (let i = 0; i < this.rows; i++) {
                for (let j = 0; j < this.cols; j++) {
                    this.data[i][j] += n;
                }
            }
        }
    }

    static transpose(a) {
        let result = new Matrix(a.cols, a.rows);
        for (let i = 0; i < a.rows; i++) {
            for (let j = 0; j < a.cols; j++) {
                result.data[j][i] = a.data[i][j];
            }
        }
        return result;
    }

    static multiply(a, b) {
        // Matrix product
        if (a.cols != b.rows) {
            console.log('Columns of A must match rows of B');
            return undefined;
        }
        let result = new Matrix(a.rows, b.cols);
        for (let i = 0; i < result.rows; i++) {
            for (let j = 0; j < result.cols; j++) {
                // Dot product
                let sum = 0;
                for (let k = 0; k < a.cols; k++) {
                    sum += a.data[i][k] * b.data[k][j];
                }
                result.data[i][j] = sum;
            }
        }
        return result;
    }

    multiply(n) {
        // Hadamard product - element wise multiply
        // for (let i = 0; i < this.rows; i++) {
        //     for (let j = 0; j < this.cols; j++) {
        //         this.data[i][j] *= n.data[i][j];
        //     }
        // }
        // Scalar product - scalar wise multiply
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                this.data[i][j] *= n;
            }
        }
    }

    print() {
        console.table(this.data);
    }

}