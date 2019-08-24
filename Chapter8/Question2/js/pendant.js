function getRings() {
	let rings = new Array()
	document.getElementById('ring_inventory').innerHTML = ("")
	let r = parseInt(prompt("How many rings are in the inventory now?"))
	let i = 0
	for (i=0; i<=(r-1); i++)
		rings[i] = prompt("Enter ring #" + (i+1) + ":")
	displayRings(rings)
	addRings(rings)
	deleteRings(rings)
}

function displayRings(rings) {
	let r = rings.length
	let i = 0
	for (i=0;i<=(r-1); i++)
		document.getElementById('ring_inventory').innerHTML = ("<h3>" + rings + "</h3>"
}
function addRings(ring) {
	let r = rings.length
	let i = 0
	let numAdd = parseInt(prompt("If you want to add to the inventory, enter the numberof rings you want to add(or enter 0):"))
	for (i=0;i<=(numAdd-1); i++){
		if (numSubt == 0)
			break;
		let oldRing = prompt("Enter a ring to delete")
		for (j=0;j<=(r-1);j++) {
			if (rings[j] == oldRing)
					rings.splice(j,1)
		}
	}
	displayRings(ring)
}