function TossCoin () {
	let str = prompt ("Begin toss the coin")
	let output = [], input = []
	for(let i = 0; i <str; i++){
		output.push(Math.floor((Math.random()*2)))
		output[i] = prompt ("Call if its head or tails")
		
		if (input[i]== output [i]){
			document.write("It's head! you are winner!")
			document.write("result of toss :" + "<img src = 'image/head.jpg' height='180' width='200'><br>")
		}
		else {document.write("It's tails! you lose!")
		document.write("<img src = 'image/tails.jpg' height='180' width='200'>")
			
			}
		}
			console.log(output)
	}