let x=8
let y=3
let z=5

function myFunction1(){
if ((x > 5) && (x < 10) == !(x <=5) || !(x >= 10)){
	document.getElementById("btn1").innerHTML = "true"
	}
}

function myFunction2(){
if (![(x > y) && (y < z)] == !(x > y) || !(y < z)){
	document.getElementById("btn2").innerHTML = "false"
	}
}

function myFunction3(){
if ((x == y) || (x > y) == (x == y) && (x < y)){
	document.getElementById("btn3").innerHTML = "false"
	}
}

function myFunction4(){
if (![(z < x) || ( z < y)] == !(z < x) && !(z < y)) {
	document.getElementById("btn4").innerHTML = "true"
	}
}