var ans = prompt("Do you want to learn javascript?");

// if (ans == "yes") {
//     alert("You have been sent an invite")
// } else {
//     alert("Sorry you are not invited");
// }

//ans == "yes" ? alert("You have been sent a ticket") : alert ("No invite")

var destination = prompt("Where do you leave?");
var resp =
destination == "Abuja" ? alert("You are in Abuja") :
destination == "Kano" ? alert("You are in Kano") :
destination == "Oyo" ? alert("You are in Oyo") :
("You are Lost and gone");
console.log(destination);

let age = prompt('How are are you in age?');

let message = (age < 3) ? 'Hi, baby!' : 
(age < 18) ? 'Hello!' :
(age < 100) ? 'Greetings!' :
'What an unusual age!';

alert( mesaage );