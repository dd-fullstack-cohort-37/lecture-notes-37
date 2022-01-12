/**
 *### Function #1
 Take two numbers as arguments and return a new value after a mathematical operation (addition, subtraction, multiplication, etc.)  Which operation is your choice.

 ### Function #2
 Take two strings as arguments and return a value that has them concatenated.
 */


function multiplyTwoNumbers(numberOne, numberTwo) {
    let sum = numberOne * numberTwo
    return sum
}

function combineTwoStrings(stringOne, stringTwo){
    let combinedString = stringOne + stringTwo
    return combinedString
}
let finalString = combineTwoStrings("functions ", "hurt my head")
console.log(finalString)

const sum = multiplyTwoNumbers(2,3)
console.log()




let firstReturn = multiplyTwoNumbers(2,3)
let secondReturn = multiplyTwoNumbers(3,4)
console.log("first return", firstReturn)
console.log("second return", secondReturn)
console.log("final answer", multiplyTwoNumbers(firstReturn, secondReturn))

console.log("condensed final answer", multiplyTwoNumbers(multiplyTwoNumbers(2,3),multiplyTwoNumbers(3,4)))

// Functions are the main unit of computation we will be using in this class
// functions can have names that we use to call/execute them
// functions take arguments/parameters from the outside world that an be used inside the function
// using the return keyword we can have a value computed inside the function exposed to the outside world