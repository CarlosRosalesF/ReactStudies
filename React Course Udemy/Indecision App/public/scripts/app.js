"use strict";

var multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 2,
    // normal function has access to .this of the current object
    multiply: function multiply() {
        var _this = this;

        // arrow functions has access .this of the parent, normal function will fail in the code bellow.
        return this.numbers.map(function (number) {
            return number * _this.multiplyBy;
        });
    }
};
console.log(multiplier.multiply());
