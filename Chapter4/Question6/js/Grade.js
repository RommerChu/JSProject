let Name= prompt("Enter the name")
let Attendance= prompt ("Enter Attendance")
let Homework=prompt("Enter Homework grade")
let Midterm=prompt("Enter Midterm grade")
let Final=prompt("Enter Final grade")
//computation grades
let CourseGrade = parseFloat((Midterm*.3)+(Final*.4)+(Homework*.2)+(Attendance*.1))
//Loop line
for(let i = 0 ; i <= Name; i++){
	Attendance.push(prompt("Enter Attendane"))
	Homework.push( prompt("Enter Homework grade"))
	Midterm.push(prompt("Enter Midterm grade"))
}
console.log("Student's name = " + Name)
console.log("Attendance = " + Attendance)
console.log("Homework = " + Homework)
console.log("Homework = " + Midterm)
console.log(CourseGrade)

document.write("<table width='70%'><tr colspan='4'><th>Name Name</th><th>Attendance</th><th>Homework</th><th>Midterm</th><th>Final</th><td><b>Course Grade</b></th></th>");
document.write("<tr>")		
document.write("<td>")
document.write(Name)
document.write("</td>")
document.write("<td>")
document.write(Attendance)
document.write("</td>")
document.write("<td>")
document.write(Homework)
document.write("</td>")
document.write("<td>")
document.write(Midterm)
document.write("</td>")
document.write("<td>")
document.write(Final)
document.write("</td>")
document.write("<td>")
document.write(CourseGrade)
document.write("</td>")
document.write("</tr>")




/*
	let	Name = []
	let NameTotal = prompt ("Enter names")
	for (let i=0; i < NameTotal; i++) {
		let Name = prompt ("Enter a name")
		Name[i]=Name
	}
	
	let Attd = []
	let AttdTotal = prompt ("Enter Attendance")
	for (let i=0; i < AttdTotal; i++) {
		let Attd = prompt ("Enter Attendance")
		Attd[i]=Attd
	}
	
	document.write(Name)
	alert("lenght of this array is" + Name.length)
	document.write(Attd)
	alert("lenght of this array is" + Attd.length)

*/
/*
/*	let	Att = prompt("Enter Attendance");
	let	Hwork = prompt ("Enter Homework");
	let	Mterm = prompt("Enter Midterm");
	let	Fmarks = prompt("Enter Final marks");
	
	document.write("<table width='70%' align='center'" + "")
	
	for (i=) {
		
	}
	
		let name = "";
		let Att = "";
		let Hwork = "";
		let Mterm = "";
		let Fmarks = "";
		let Grade = 0;
		
		
		
		
	/*do
	
	document.write('<table width ="40%" align = "center">');
	
	{
		let Grade =(Att*0.1) + (Hwork*0.2) + (Mterm*0.3) + (Fmarks*0.4)
		document.write('<tr><th>' + name + '</tr></th>' + Att + '</tr></th>' + Hwork + 
						'</tr></th>' + Mterm + '</tr></th>' + Fmarks+'<?tr></th>');
		name = prompt("Enter student name");
		Att = prompt("Enter Attendance ");
		Hwork = prompt ("Enter Homework");
		Mterm = prompt("Enter Midterm");
		Fmarks = prompt("Enter Final marks");
	}


}
}*/