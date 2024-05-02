let arr = ["Tesla", "Toyota", "Honda", "Innoson", "BMW"];

console.log(arr);

//arr.shift(); //the shift method
//console.log(arr)

arr.unshift("Nord");
console.log(arr);

console.log(arr[2] = "Hyundai") // replacing element 2(toyota)

console.log(arr);

let d = Number(prompt("add an item, enter number"));
let dd = prompt("Enter new item");

if (d > arr.length){
    alert("Index not found");
    console.clear()
} else {
    let dd = prompt("Enter new item");
    arr[d] = dd;
    alert("Item addes successfully");
    console.log(arr);
}