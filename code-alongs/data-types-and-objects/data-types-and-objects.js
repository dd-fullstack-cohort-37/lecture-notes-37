// we declare variables the first time we use them with:
// CONST if it will not be changed
// LET if it will be changed
// VAR as a last resort which we will talk about later

const studentName = 'Austin'
let studentAge = 25
const studentFavoriteColor = 'orange'
let studentFavoriteActivity = 'video games'

console.log(studentName + ' is ' + studentAge)

// 1 year later
studentAge = studentAge + 1
console.log(studentName + ' is ' + studentAge)

// in objects the colon is an assignment like =
let student = {
	name: studentName,
	age: studentAge,
	favoriteColor: studentFavoriteColor,
	favoriteActivity: studentFavoriteActivity
}

console.log(student)
// the dot is used to access values in objects
console.log(student.name + ' is ' + student.age)

let student2 = {
	name: 'Maria',
	age: 23,
	favoriteColor: 'purple',
	favoriteActivity: 'mindfulness'
}

console.log(student2.name + ' likes ' + student2.favoriteActivity)

//another year goes by
student.age = student.age + 1
student2.age = student2.age + 1

console.log(student.name + ' is ' + student.age)
console.log(student2.name + ' is ' + student2.age)

let arrayOfStudentObjects = [student, student2]
// console log the array of student objects
console.log(arrayOfStudentObjects)
// console.log the first student object in the array
console.log(arrayOfStudentObjects[0])
// console log the name of the second student in the array of student objects
console.log(arrayOfStudentObjects[1].name)

// how this could be used later in the bootcamp
arrayOfStudentObjects.forEach(student=>console.log(student.name + ' loves ' + student.favoriteActivity))
