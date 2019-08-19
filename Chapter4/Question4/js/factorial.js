let userInput = prompt ("Enter a value")
let fact = 1
for (i=userInput; i>=1; i--) {
	fact = fact * i
}
document.write("<table width='40%' align='center'><tr><td colspan='2'><h3>Factorial Value</h3></td></tr>");
document.write("<tr><td colspan='2'>" + "User input Integer is: " + userInput + "</td></tr>")
document.write("<tr><td colspan='2'>"+ "Factorial value is: " + fact + "</td></tr>")
