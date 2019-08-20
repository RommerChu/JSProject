
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