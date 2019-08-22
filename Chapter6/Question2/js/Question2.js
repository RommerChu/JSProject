function Phone (){
	let x = document.getElementById("phoneNumber").value

		console.log("phone Number :"+x);
		if(x.charAt(0)=="(" &&
		x.charAt(4)==")" &&
		x.charAt(8)=="-" &&
		x.length==13)
		{
	     alert("Phone number is validated")
	} 
	else {
		alert("Enter phone number in proper format")
	}
	}
	
