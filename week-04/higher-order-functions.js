
const doSomeTask = () => {
	return 'yeah I did some task'
}

// assigns the function as the value
const doAnotherTask = doSomeTask

// runs the function and assigns the return value to the variable
const completedTask = doSomeTask()

console.log(doAnotherTask)
console.log(completedTask)

const doSomeTaskThreeTimes = (someTask) => {
	for(let i = 0; i < 3; i++){
		someTask()
	}
}

const displayTask = () => {
	console.log('did this task')
}

doSomeTaskThreeTimes(displayTask)

console.log([1,2,3,4,5].length)
