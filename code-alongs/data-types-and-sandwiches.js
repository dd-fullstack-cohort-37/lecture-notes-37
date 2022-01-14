// declare variables the first time we use them
// CONST if it will not be changed
// LET if it will be changed
// VAR as a last resort which we will talk about later

// STRING data type is text in quotes
let bread = "Dave's Killer White"
let peanutButter = 'creamy'
const jelly = 'strawberry'
// boolean data type
let removeCrust = true
// NUMBER data type
let numberOfSandwiches = 2

let pBAndJSandwichStrawberry = {
 bread,
 peanutButter,
 jelly,
 removeCrust,
 numberOfSandwiches
}

let cindySandwich = {
 bread: 'white',
 peanutButter: 'crunchy',
 jelly: 'grape',
 removeCrust: false,
 numberOfSandwiches: 2
}

let emmanuelSandwich = {
 bread: 'white',
 peanutButter: 'creamy',
 jelly: 'strawberry',
 removeCrust: false,
 numberOfSandwiches: 3
}

let cindy = {
 name: 'Cindy',
 pBAndJSandwichPreference: cindySandwich
}

let maria = {
 name: 'Maria',
 pBAndJSandwichPreference: pBAndJSandwichStrawberry
}

let emmanuel = {
 name: 'Emmanuel',
 pBAndJSandwichPreference: emmanuelSandwich
}

// ARRAY data type (This is an array of objects)
let sandwichEaters = [cindy, maria, emmanuel]

console.log(sandwichEaters)

// BOOLEAN EXPRESSIONS
// What is TRUE???
// true
// A string
// a number other than 0
// []
// {}

// What is FALSE???
// undefined
// null
// 0
// false
// ''


if (''){
 console.log(true)
}else{
 console.log(false)
}


