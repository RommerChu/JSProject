function roundIt(){
	let z = document.getElementById("orig").value;
	//while (isNaN(userInput) || (userInput<0)){alert("Please enter a number")
	
	let x = 0
	let y = 0
		
	if (z > x){
		x = parseInt(Math.ceil("orig").toFixed(2));
		document.getElementById("rndUp").innerHTML = x;
	}
	else if (z < y){
		y = parseInt(Math.floor("orig").toFixed(2));
		document.getElementById("rndDn").innerHTML = y;
	}
}