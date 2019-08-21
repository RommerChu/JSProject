function goToWar() {
	let name1 = ""
	let name2 = ""
	let playerOne = 0
	let playerTwo = 0
	let oneCard = 0
	let twoCard = 0
	let count = 1
	let CardsArr= [1,2,3,4,5,6,7,8,9,10,11,12,13]
	document.write("<table width=40% align='center'><tr><td colspan='2'><h3>The Game of War</h3></td></tr>")
	while ((playerOne<10) && (playerTwo<10)){
		oneCard=Math.floor(Math.random() * 13 +1)
		towCard=Math.floor(Math.random() * 13 + 1)
		if (oneCard > twoCard) 
			playerOne++
		else if (twoCard > oneCard)
			playerTwo++
		document.write("<tr><td colspan= '2'>&nbsp;</td></tr><tr><td colspan = '2'>Deal Number" + count + ": </td></tr>")
		document.write("<tr><td>" + name1 + "'s card: " 
				+ oneCard + " --Score: " + playerOne 
				+ "</td>")

		document.write("<td>" + name2 + "'s card: " + twoCard
				+ "-- Score: " + playerTwo + "</td></td>")
		count++
	}
	//adding a card images
	if (count== 1) {
		document.writedocument.write("<img src=images/ace_spade.png/>")
	}
	//
	if ((playerOne == 10) && (playerTwo != 10))
		document.write("<tr><tdcolspan ='2'><h3>The winner is " + name1 + "!</h3></td></tr>")
		
	if ((playerTwo == 10) && (playerOne != 0))
		document.write("<tr><td colspan = '2'<h3>The winner is " + name2 + "!</h3></td></tr>")
	document.write("</table>")

} 