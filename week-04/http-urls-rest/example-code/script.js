console.log('Is this thing on')

function loadPlaceholder() {
    const result = fetch('http://jsonplaceholder.typicode.com/posts/')


     const secondResult = result.then(response => {
        console.log(response)
        return response.json()
    })

    secondResult.then(data=> {
        let elements = ""
        for(let post of data) {
            elements = `${elements} \n <p>${post.body} </p>`
        }
        console.log(elements)
        document.getElementById("target").innerHTML = elements
    })

    console.log('line 11 came after loadPlaceholder')
}

