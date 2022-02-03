// HOW TO MAKE A PB&J SANDWICH
// get 2 slices of bread
// lay the bread slices next to each other
// spread peanut butter on one
// spread jelly on the other
// flip one slice of bread on the other

// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await

// fetch('https://jsonplaceholder.typicode.com/posts/1')
// 	.then((response) => response.json())
// 	.then((json) => console.log(json));

async function getJson (){
	let response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
	let json = await response.json()
	console.log(json)
}

getJson()
console.log('pizza')
