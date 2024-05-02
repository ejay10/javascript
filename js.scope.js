let x = 10;  //global variable
if (true){
    let y = 32;  //local variable
    var z = 13; // global variable
    alert(`The answer is ${x + y + z}`);
}

alert(`Second answer is ${x + y}`);