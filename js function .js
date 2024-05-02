//function definition

// function exponen(base, e){ //function definition
// let result = 1;
// for (let c = 0; c < e; c++) {
//     result *= base;
// }
// return result;
// }

function exponen(base, e){ //function definition
    let result = 3;
    for (let c = 0; c < e; c++) {
        result *= base;
    }
    result = result / 3;
    return result;
    }


alert(exponen(4, 2)) //function call


