// 3 ways of writing essentially the same thing

function myFunction(argument){
	// do something with the argument
}

let myOtherFunction = function(argument){
	// do something with the argument
}

let myArrowFunction = (argument) => {
	// do something with the argument
}

// shorthand
let myShortFunction = argument => console.log(argument)

let myOtherShortFunction = () => console.log('something')