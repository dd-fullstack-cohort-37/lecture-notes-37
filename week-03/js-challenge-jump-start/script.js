// step 1 - add event attribute to html tag to call a function when the event happens
// step 2 - make a function to do something when called
// step 3 - get the html element that we will make a change to
// step 4 - console log the html element that you just got and see what you can do with it
// step 5 - change some value in that html element

console.log('hello world')

function clickedButton(){
	console.log('someone clicked the button')
	let header = document.getElementById('header1')
	console.log(header)
	console.log(header.innerText)
	header.innerText = 'I Love the JS Challenge'
	console.log(header.style)
	header.style.border = 'solid 5px black'
}