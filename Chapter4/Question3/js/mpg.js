let TripN= prompt("Enter the trips you want to record")
let MilesDrv= prompt ("Enter miles")
let GalsU=prompt("Enter gallon")
//computation miles per gallon
let MpG = parseFloat(Math.round(MilesDrv/GalsU))
//Loop line
for(let i = 0 ; i <= TripN; i++){
	City.push(prompt("Enter_city_trip"))
	MilesDrv.push( prompt("Enter_Miles"))
	Gals.push(prompt("Enter_gallons"))
}
console.log("City driven = " + TripN)
console.log("Miles = " + MilesDrv)
console.log("Gallons = " + GalsU)
console.log(MpG)

document.write("<table width='70%'><tr colspan='4'><th>City Trip Name</th><th>Miles</th><th>Gallons</th><td><b>Miles Per Gallon</b></th></th>");
document.write("<tr>")		
document.write("<td>")
document.write(TripN)
document.write("</td>")
document.write("<td>")
document.write(MilesDrv)
document.write("</td>")
document.write("<td>")
document.write(GalsU)
document.write("</td>")
document.write("<td>")
document.write(MilesDrv/GalsU)
document.write("</td>")
document.write("</tr>")
