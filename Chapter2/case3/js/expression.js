let x=8
let y=3
let z=5

function myFunction1 (){
if ((x > 5) && (x < 10) == !(x <=5) || !(x >= 10)){
	alert("true")
	
}
else {
	alert("false")
	
	}
}

function myFunction2 (){
if (![(x > y) && (y < z)] == !(x > y) || !(y < z)){
	alert("true")
}
else {
	alert("false")
	}
}
	
function myFunction3 (){
if ((x == y) || (x > y) == (x == y) && (x < y)){
	alert("true")
}
else {
	alert("false")
	}
}	

function myFunction4 (){
if (![(z < x) || ( z < y)] == !(z < x) && !(z < y)){
	alert("true")
}
else {
	alert("false")
	}
}	