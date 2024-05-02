/**
 * toString()
 * toExponential()
 * toFixed()
 * parseFloat()
 * parseInt()
 * Math Class()
 * Math.random()
 * Math.sqrt()
 */

//toString method()

let a = 87;
let b = 13;
let c = a.toString() + b.toString();
console.log(c);


//toExponential()

let d = 2.2;
console.log(d.toExponential(2))

//toFixed()

let e = 25.4862;
console.log(e.toFixed(2))

//toPrecision()

let f = 238.233857;
console.log(f.toPrecision(7))

//toParseInt()

//let ll = parseInt(prompt("Enter a number"));
//console.log(ll * 2);


//maths.random()

let i = Math.random();
console.log(i)


//toParseFloat()

let t = parseFloat(prompt("Enter a number"));
console.log(t * 5.1)