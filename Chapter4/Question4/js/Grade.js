function getClasslass (){
	document.write('<table width ="40%" align = "center">');
		let name = "";
		let Att = "";
		let Hwork = "";
		let Mterm = "";
		let Fmarks = "";
		let Grade = 0;
		name = prompt("Enter student name");
		Att = prompt("Enter Attendance");
		Hwork = prompt ("Enter Homework");
		Mterm = prompt("Enter Midterm");
		Fmarks = prompt("Enter Final marks");
	do
	{
		Grade = Att + Hwork + Mterm + Fmarks;
		document.write('<tr><th>' + name + '</tr></th>' + Att + '</tr></th>' + Hwork + 
						'</tr></th>' + Mterm + '</tr></th>' + Fmarks+'<?tr></th>');
		name = prompt("Enter student name");
		Att = prompt("Enter Attendance ");
		Hwork = prompt ("Enter Homework");
		Mterm = prompt("Enter Midterm");
		Fmarks = prompt("Enter Final marks");
	}


}
		
