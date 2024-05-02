alert("This program will allow you to: \n1. Convert to uppercase. \n2. Convert to lower case. \n3. Replace selected text");

let uText = prompt("Enter the text to analyze ");

let uResp = prompt("what will you like doing, on the text?\n For converting to lower case, type 'L',\nFor converting to upper case 'U' \NFor replacing text 'R'");

if (uResp == 'L' || uResp == 'l') {
    function userLower(t) {
        let newText = t.toLowerCase();
        return newText;
    }
    alert(userLower(uText));
}else if(uResp == 'U' || uResp == 'u'){

}else if(uResp == 'R' || uResp == 'r'){

}else {
    alert("Invalid option");
}