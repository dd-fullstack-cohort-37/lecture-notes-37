// 1. Write an algorithm, either in pseudocode or in code, that converts weights to grams.  The algorithm should take two arguments.  The first argument will be a number, the second will be an abbreviation for a unit of weight, either "lbs", "oz", "kg", "g", or "mg".  Based on the second argument, convert the number to grams and output it.

function convertWeightToGrams (weight, units){
	let grams
	if (units === 'lbs'){
		grams = weight * 453.592
	}else if(units === 'oz'){
		grams = weight * 28.3495
	}else if(units === 'kg'){
		grams = weight * 1000
	}else if(units === 'mg'){
		grams = weight / 1000
	}else if(units === 'g'){
		grams = weight
	}else{
		grams = 'please enter "lbs", "oz", "kg", "g", or "mg"'
	}
	return grams
}

console.log(convertWeightToGrams(8, 'lbs'))

