// variables are a named place to store information in memory

// When using variables in javascript we must declare them at first use
// We declare variables using const, let or var
// const is used to declare a variable that will be constant (will not change)
// let is used to declare a variable that can change

let instructor
console.log('instructor after declaration but before setting value', instructor)

instructor = 'Marty'
const leadInstructor = 'Marty'
console.log('morning instructor:', instructor)

// this afternoon
instructor = 'George'
// the variable instructor contains a string
console.log('afternoon instructor:', instructor)

instructor = 829347
console.log(instructor)

if (1 === '1') {
	console.log("1 == '1'")
}else{
	console.log("1 does not === '1'")
}


// if cardSuit === 'hearts'
//       put card in first stack
// else if cardSuit === 'clubs'
//       put card in second stack.......

let cardSuit = 'clubs'
let firstStack = []
let secondStack = []
if (cardSuit === 'hearts'){
	firstStack.push(cardSuit)
}else if(cardSuit === 'clubs'){
	secondStack.push(cardSuit)
}

console.log(secondStack)

