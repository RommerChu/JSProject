let userInput = prompt ("Please enter a number with decimal")
document.write("<table width='50%' align='center'><tr><td colspan='2'><h4>This is the original value input:</h4>" + userInput + "</td></tr>")

let x = Math.ceil(userInput)
let y = Math.floor(userInput)
console.log(x)
console.log(y)

document.write("<tr><td colspan='2'>" + "</td></tr>")
document.write("<tr><td colspan='2'>" + "Round up number is: " + x + "</td></tr>")
document.write("<tr><td colspan='2'>" + "</td></tr>")
document.write("<tr><td colspan='2'>" + "Round down number is: " + y + "</td></tr>")