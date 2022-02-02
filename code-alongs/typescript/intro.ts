let myString : string = "I am a string"
myString = "1"
console.log(myString)

let exampleArray: Array<number> = [1,2,3,4,6]

let exampleArrayWithNumbersAndStrings: Array<number|string> = [1,3,4,6,"I also contain a string"]

function returnFirstValue(myValue: number[]): number {
	return myValue[0]
}

const arrowFunctionExample = (myValue: number[] ): number => myValue[0]

const arrowFunctionWithExplicitReturn = (myValue: number[]): number => {
	return myValue[0]
}

returnFirstValue(exampleArray)

type MyObject = {one: number, two: string, three:{nestedValue:any}}

interface ObjectWithInterface {
	one: number,
	two: string
}

let myObject: MyObject = {one: 111, two: "I am a string", three: {nestedValue: "I can be any type"} }

let objectWithInterface: ObjectWithInterface = {one: 1, two: "I am a string"}

console.log(objectWithInterface.two)

// Typescript is a superset of javascript that includes all of javascript functionality with added features
// when we write typescript we are writing fancy javascript
//With typescript we now emphasize the data types we use in order to avoid bugs