function pink() {
	let color = document.getElementById("colorPink").innerHTML
	switch (color) {
		case "Pink":
		document.body.bgColor="Pink"
		break;
	}
}

function blue() {
	let color = document.getElementById("colorBlue").innerHTML
	switch (color) {
		case "Blue":
		document.body.bgColor="Blue"
		break;
	}
}

//Text color

function red() {
	let color = document.getElementById("colorRed").innerHTML
	switch (color) {
		case "Red":
		document.getElementById("TextRed").style.color="Red"
		break;
	}
}

function green() {
	let color = document.getElementById("colorGreen").innerHTML
	switch (color) {
		case "Green":
		document.getElementById("TextGreen").style.color="Green"
		break;
	}
}