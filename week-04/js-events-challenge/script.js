
const findAndReplace = (theEvent) => {
	theEvent.preventDefault()
	let text =document.getElementById('text').innerText
	console.log(text)
	const searchTerm = document.getElementById('text-find').value
	console.log(searchTerm)
	const replaceTerm = document.getElementById('text-replace').value
	console.log(replaceTerm)
	const regularExpression = new RegExp(searchTerm, 'gi')
	const newText = text.replace(regularExpression, replaceTerm)
	console.log(newText)
	document.getElementById('text').innerText = newText
}

let findAndReplaceForm = document.getElementById('find-and-replace-form')
findAndReplaceForm.addEventListener('submit', findAndReplace)

function shuffleWords(){
	let paragraph = document.getElementById('shuffle').innerText
	console.log(paragraph)
	let words = paragraph.split(' ')
	console.log(words)

	for(let i = 0; i < words.length; i++) {
		let randomNumber = Math.random()
		console.log('randomNumber', randomNumber)
		let decimalIndex = randomNumber * words.length
		console.log('decimalIndex', decimalIndex)
		let newLocation = Math.floor(decimalIndex)
		console.log('newLocation', newLocation)
		let currentWord = words[i]
		words[i] = words[newLocation]
		words[newLocation] = currentWord
 	}

	const newParagraph = words.join(' ')
	document.getElementById('shuffle').innerText = newParagraph
}

function shuffleLetters(){
	let paragraph = document.getElementById('shuffle').innerText
	console.log(paragraph)
	let words = paragraph.split(' ')
	console.log(words)

	let newWords = words.map(word => {
		let newWord = word.split('')
		for(let i = 0; i < newWord.length; i++) {
			let newLocation = Math.floor(Math.random() * newWord.length)
			let currentLetter = newWord[i]
			newWord[i] = newWord[newLocation]
			newWord[newLocation] = currentLetter
		}
		return newWord.join('')
	})

	const newParagraph = newWords.join(' ')
	document.getElementById('shuffle').innerText = newParagraph
}

// fetch('https://jsonplaceholder.typicode.com/posts/1')
// 	.then((response) => response.json())
// 	.then((json) => console.log(json));

async function getJson (){
	let response = await fetch('https://jsonplaceholder.typicode.com/posts')
	let json = await response.json()
	console.log(json)
	json.forEach(post => {
		let hThree = document.createElement('h3')
		hThree.innerText = post.title
		let p = document.createElement('p')
		p.innerText = post.body
		let section = document.getElementById('fetchPosts')
		section.appendChild(hThree)
		section.appendChild(p)
	})
}

getJson()
console.log('pizza')



