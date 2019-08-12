function getTemp1(){
	let c = document.getElementById("cel").value
	let fah = (c * (9/5))+32
	document.getElementById("fah").value=fah

	

}
function getTemp2(){
	let f=document.getElementById("fah").value
	let cel=5/9*(f-32)
	document.getElementById("cel").value=cel
	
}