let frm = document.getElementById("form");
	frm.onsubmit=function(){
let num = document.getElementById("number").value;
let even = document.getElementById("even")
let odd = document.getElementById("odd")
let i = Ev_num=0; Od_num=0;
	for (i=1; i<=num; i++){
		if (i%2 == 0){
			Ev_num = Ev_num+i;
		}
		else{
			Od_num = Od_num+i;
		}
	}
	even.innerHTML = Ev_num;
	odd.innerHTML = Od_num;
	}













/*let num = [ 4, 8, 11, 15, 18, 35, 54, 85, 92 ]
	let even = []
	let odd = []
	for (let i =0; i<num.length; i++){
		if (num[i]%2==0){
		even[even.length] = num[i]

		
		}
	else{
		odd[odd.length] = num[i]
		}
	}
        console.log(even)
		console.log(odd)
		
		
	let evensum =0
	let oddsum =0

	for(let i = 1;  i <=1; i++){
	
	if(i%2==0 ){
		evensum= evensum+i
	
	
	}
	else{
		oddsum= oddsum+i
	
		}
	}

    console.log("sum of all even numbers-"+(evensum))
	console.log("sum of all odd numbers-"+(oddsum))*/
		