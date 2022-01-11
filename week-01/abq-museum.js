// get age
// NM resident?
// Foundation Member?

// declare age = customer age
// declare NMResident = NM resident
// declare foundationMember = Foundation Member
// declare price

// if age < 4 or foundationMember
//     price = free
// else if age < 13
//     price = 3
// else if age >= 65
//     price = 4
// else if NMResident = true
//     price = 5
// else
//     price = 6


const age = 30
const NMResident = true
const foundationMember = false
let price

if(age < 4 || foundationMember) {
	price = 'free'
} else if(age < 13) {
	price = 3
} else if(age >= 65) {
	price = 4
} else if(NMResident) {
	price = 5
} else {
	price = 6
}
console.log(price)