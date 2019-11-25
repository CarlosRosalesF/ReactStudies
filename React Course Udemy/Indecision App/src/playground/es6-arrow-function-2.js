const multiplier = {
    numbers: [1,2,3],
    multiplyBy: 2,
    // normal function has access to .this of the current object
    multiply() {
        // arrow functions has access .this of the parent, normal function will fail in the code bellow.
        return this.numbers.map((number) => number * this.multiplyBy)
    }
}
console.log(multiplier.multiply())