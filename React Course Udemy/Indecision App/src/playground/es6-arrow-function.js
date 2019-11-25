const square = function (x) {
    return x*x
}

const squareArrow = (x) => x*x

console.log(squareArrow(9))

// Challenge create an arrow function that returns the first name

/*const firstName = (fullName) =>{
    if(fullName) {
        return fullName.split(' ')[0]
    }
}*/

const firstName = (fullName) => fullName.split(' ')[0]

console.log(firstName('Carlos Rosales'))