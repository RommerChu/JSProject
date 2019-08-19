console.log("Hello")

function roundit(){
	let userInput = document.getElementById("orig").value;
	while (isNaN(userInput) || (userInput<0)){alert("Please enter a number")}
	
	let x = parseInt(Math.ceil(userInput).toFixed(2));
	let y = parseInt(Math.floor(userInput).toFixed(2));
	if (x > userInput){
		document.getElementById("rndUp").innerHTML = x;
	}
	else if (y < userInput){
		document.getElementById("rndDn").innerHTML = y;
	}

}



	//let x = parseInt(Math.ceil(userInput).toFixed(2))
	//let y = parseInt(Math.floor(userInput).toFixed(2))









