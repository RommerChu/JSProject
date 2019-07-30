let ageInput = prompt ("Please enter your age to see the ticktet cost")

if (ageInput < 5){
	console.log ("Your ticket is FREE")
}

else if (ageInput >= 5 && ageInput <= 12) {
	console.log ("Child ticket cost is $5.00")
}

else if (ageInput > 12){
	console.log ("Adult ticket cost $9.00")
}