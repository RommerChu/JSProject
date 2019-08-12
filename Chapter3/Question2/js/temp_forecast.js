let temp1 = "Bundle up! It's really freezing out here!"
let temp2 = "Pretty cold with a chance of snow"
let temp3 = "Don't forget your jacket! It's still chilly outside"
let temp4 = "Perfect lovely weather...unless it rains"
let temp5 = "Nice and warm. Go for a swim"
let temp6 = "It's really hot! Proballbly best to stay in the air condidtioned spot!"


function getTemp1(){
	let c = document.getElementById("cel").value
	let fah = (c * (9/5))+32
	document.getElementById("fah").value=fah
	if (c <= -18){
		alert(temp1)
	}
	else if (c <= -18 && c <= 0) {
		alert(temp2)
	}
	else if (c <= 17 && c >= 0) {
		alert(temp3)
	}
	else if (c <=27 && c >=18) {
		alert(temp4)
	}
	else if (c <= 35 && c >= 28) {
		alert(temp5)
	}
	else if ( c >= 36){
		alert(temp6)
	}
}

function getTemp2(){
	let f=document.getElementById("fah").value
	let cel=5/9*(f-32)
	document.getElementById("cel").value=cel
	if (f <= 0) {
		alert(temp1)
	}
	else if (f >= 0 && f <= 32) {
		alert(temp2)
	}
	else if (f >= 33 && f <= 59) {
		alert(temp3)		
	}
	else if (f >=60 && f <=80) {
		alert(temp4)
	}
	else if (f >= 81 && f <= 95) {
		alert(temp5)
	}
	else if (f >= 96) {
		alert(temp6)
	}
}