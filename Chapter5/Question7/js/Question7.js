
let num = prompt("Enter your numbers");
let evenNum = [], oddNum = [], digit=0;
let evensum=0, oddsum=0; evenavg=0, oddavg=0;
	for (let i=0; i<num; i++)
		{
		digit=parseInt(prompt("Enter your number:"));
		if(digit%2==0)
		{
			evenNum.push(digit);
			evensum=evensum+digit;
		}
		else {
			oddNum.push(digit);
			oddsum=oddsum+digit;
		}
	}
		evenavg=(evensum/evenNum.length);
		oddavg=(oddsum/oddNum.length);
		
			console.log("even Num is:"+evenNum);
			console.log("sum of even num digit is:"+evensum);
			console.log("Avg of even num digit is:"+evenavg);
			
			console.log("odd num is : "+oddNum);
			console.log("sum of odd num digit is : "+oddsum);
			console.log("Avg of odd num is : "+oddavg);
			
			
			
		
		