function text(action) {
	let user=""
	
	if (action == "reverse") {
		 user = prompt ("Enter your message")
	}
	else {
		 user = document.getElementById("rev").innerHTML
	}
	
let word = ""
for (i=user.length-1; i>=0; i--) {
	word=word+user.charAt(i)
}
	document.getElementById("rev").innerHTML = word
	return true
}