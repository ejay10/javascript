//this shows how tp use do-whole loop

let yourName;

do {
    yourName = prompt("Tell me your name? ");
} while (!yourName);

alert(yourName);

//all strings convert to true, except for ""