let userFirstNameInput = prompt ("Enter your name:")
let userLastNameInput = prompt ("Enter your last name:")
let userSchoolNameInput = prompt ("Enter your School:")
let word = userSchoolNameInput.split(' ')
if (userFirstNameInput + userSchoolNameInput + userSchoolNameInput){
	console.log ('This is your username: ' + userFirstNameInput.toLowerCase().charAt(0) + userLastNameInput.toLowerCase().charAt(0) + word[0])
}