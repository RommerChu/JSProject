//This line is to show and hide passwords
function ShowPwd1() {
	let loginStat = false
	let getLoginInput1 = document.getElementById("pass1")
	if (loginStat === false){
		getLoginInput1.setAttribute("type", "text")
		loginStat = true
	}
	else if (loginStat === true) {
		getLoginInput1.setAttribute("type", "password")
		loginStat = false
	}
}

function ShowPwd2() {
	let loginStat = false
	let getLoginInput2 = document.getElementById("pass2")
	if (loginStat === false){
		getLoginInput2.setAttribute("type", "text")
		loginStat = true
	}
	else if (loginStat === true) {
		getLoginInput2.setAttribute("type", "password")
		loginStat = false
	}
}
//this line is for text format
function filter(input){
	let regex = /^\s*(.*\S)\s*$/gi; // non-whitespaces of string
	input.value = input.value.replace(regex, "$1")
	return true
}
//Alert of passwords if its true or false
function getPass(form) { 
	let pw1 = document.getElementById("pass1").value
	let pw2 = document.getElementById("pass2").value
	if (pw1.length !== 8 && pw2.length !== 8) {
			alert ("Password do not match. Please enter your password EXACTLY 8 characters!") 
	} 
	else if (pw1.length === pw2.length) { 
		alert ("Password confirmed!")
	}
	
	
	//////////////////////////////////////////////////////
	
	
	//else { 
	//	alert("Password confirmed!")
	//	return true		
	//}
	
	/*if (pw1 == '') {
		alert ("Please enter a password. Exactly 8 characters only.");
	}
	else if (pw2 == '') {
		alert ("Please enter confirm password"); 
	}	  
	else if (pw1 !== pw2) { 
		alert ("Password do not match") 
		
	} 
	else{ 
		alert("Password confirmed!") 
		
	}
	
	let pw0 =  /^(?=.*[0-8])(?=.*[!@#$%^&*])[a-zA-Z0-8!@#$%^&*]{0,8}$/*/
} 