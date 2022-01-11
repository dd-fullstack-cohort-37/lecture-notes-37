// Write an algorithm that runs from 1 to 20. When the number is even, output 'fizz'. When the number is divisible by 5, output 'buzz'. If it is neither even nor divisible by five, output 'foo'.

// foreach number between 1 and 20 execute a loop
// while looping between 1 and 20 check every number
// if the number is even print fizz
// if the number is divisible by 5 output buzz
// else output foo

for(let i = 1; i <=20; i++ ) {
    console.log("iterator", i)
    if(i % 2 === 0 || i % 5 === 0 ) {
        if (i % 2 === 0) {
            console.log("fizz")
        }
        if (i % 5 === 0) {
            console.log("buzz")
        }
    } else {
        console.log("foo")
    }

}




//Given two numbers, write an algorithm that outputs the sum of all odd numbers between those numbers, inclusive.

// declare a value sum that is initialized at 0
//given a number i and a number j define i and j
// loop between i and j assuming i is less than j
// if iterator is odd add iterator to the sum
// else continue
// return the sum
