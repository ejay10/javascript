/**
 * join()
 * pop()
 * push()
 * shift()
 * unshift()
 * using splice and slice to add or remove items
 */


let arr = ["Abia State", "Ebonyi State", "Babcock", "Nile"];
console.log(arr)
let arr2 = arr.join(" University ")  //join method
console.log(arr2);
let rr3 = arr.pop();
console.log(`removed element ${arr3}`);

console.log(`The original array showing removed element ${arr}`);

arr.push("American University");
console.log(arr)