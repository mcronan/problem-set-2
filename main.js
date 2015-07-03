/************************************
			   1. Reverse 
**************************************/
/******** using methods  ********/

// var firstReverse = function(orderString) {
// 	// newString = orderString.split('').reverse().join('')
// 	// console.log(newString)

// /******** using a for loop ********/
	
// 	var string = ""

// 	for(var i = orderString.length-1; i >= 0; i -= 1 )
// 	    string += orderString[i]
// 		console.log(string)
// 	}

// firstReverse("This is the ordered string")

/**************************************
		   2.  Swap the cases 
***************************************/

var swapCase = function(theString){
	var array = []

	for(var i = 0; i < theString.length; i ++ ) {
		if(theString[i] === theString[i].toUpperCase()) {
			array.push(theString[i].toLowerCase())
		}
	 else {
		array.push(theString[i].toUpperCase())
		}
	
	}
	var finalString = array.join('')
	console.log(finalString)
}

swapCase("helLO woRlD")