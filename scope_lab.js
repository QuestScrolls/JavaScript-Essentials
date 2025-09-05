// Global scope
var globalVar = "I'm a global variable"; // Not used anymore
let globalLet = "I'm also global, but scoped with let"; //We can overwirite a value with new value
const globalConst = "I'm a global constant"; // Value always stays the same


{
// Block scope
var blockVar = "I'm a block-scoped var";
let blockLet = "I'm a block-scoped let";
const blockConst = "I'm a block-scoped const";
}


// Wroks well
console.log(globalVar);
console.log(globalLet);
console.log(globalConst);

// Deosn't work since block is not defined 
console.log(blockVar);
console.log(blockLet);

function show(){
var functionVar = "I'm a block-scoped var";
let functionLet = "I'm a block-scoped let";
const functionConst = "I'm a block-scoped const";
}
show();
    
    console.log(functionVar); // Throws ReferenceError
    console.log(functionLet); // Throws ReferenceError
    console.log(functionConst); // Throws ReferenceError