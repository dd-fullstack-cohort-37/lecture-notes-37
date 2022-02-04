var myString = "I am a string";
myString = "1";
console.log(myString);
var exampleArray = [1, 2, 3, 4, 6];
var exampleArrayWithNumbersAndStrings = [1, 3, 4, 6, "I also contain a string"];
function returnFirstValue(myValue) {
    return myValue[0];
}
var arrowFunctionExample = function (myValue) { return myValue[0]; };
var arrowFunctionWithExplicitReturn = function (myValue) {
    return myValue[0];
};
returnFirstValue(exampleArray);
var myObject = { one: 111, two: "I am a string", three: { nestedValue: "I can be any type" } };
var objectWithInterface = { one: 1, two: "I am a string" };
console.log(objectWithInterface.two);
