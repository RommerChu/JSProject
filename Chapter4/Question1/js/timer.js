let timer = 1000
let sec = 0
function countdown () {
	sec = (timer%20)
	if (timer == 979) {
		console.log(timer)
		console.log(sec)
		//document.getElementById("time").innerHTML = "BLAST OFF!"
	}
	else{
		document.getElementById("time").innerHTML = sec.toString()
	timer--
	setTimeout(function() {
		countdown();
	}, 1000)
	}
}
