let calculator = {
    a: 5,
    b:2,
    add(){
        return this.a + this.b
    },
    minus(){
        return this.a - this.b
    },
    divide(){
        return this.a / this.b
    },
    multiply(){
        return this.a * this.b
    }
}
console.log("Addition:", calculator.add())
console.log("Subtraction:", calculator.minus())
console.log("Multiplication:", calculator.multiply())
console.log("Division:", calculator.divide())
