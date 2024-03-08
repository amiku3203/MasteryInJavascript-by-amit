// logical opreator

// logical AND &&
// logiacal OR ||
// Logical NOT !

const a= true;
const b=false
const c=4;

console.log(a &&b) // false 
console.log(c<2 && c>2); // false 
console.clear()
console.log(a||b) // true
console.log(b||b)

console.log(!a)
console.log(!b)

let pass= "jhddh";

if(pass.length>8 && pass.includes("h")){
    console.log("Valid");
} else {
     console.log("invalid")
}