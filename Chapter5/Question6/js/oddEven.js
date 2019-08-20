let userInput = prompt ("Enter any desired number")
let odd=0
let even=0
let oddSum=0
let evenSum=0
if (userInput%2 == 0) {
}
else if (userInput%3 == 0){
	
}
for(let n=1; n<=userInput; n++){
	if(n%2 == 0 && n%3 == 0){
		evenSum = evenSum + n
	}
	else {
		oddSum = oddSum + n
	}
}

document.write("<p> Even Numbers </p>" + even)
console.log("Odd numbers")
console.log("Sum of even no.:"+evenSum)
console.log("Sum of odd no.:"+oddSum)
console.log("Sum of all no.:"+ (evenSum+oddSum))