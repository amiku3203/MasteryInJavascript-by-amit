// strings

const { lstat } = require("fs");

let firstName = "Amit";
console.log(firstName);
let secondName = "webdev";
console.log(secondName)

// 1-concatnation
let fullName= firstName+ ' ' +secondName;
console.log(fullName)
let fullName1=firstName.concat(secondName)
console.log(fullName1)

//2- append
firstName+="something else"
console.log(firstName);

//3 -length
console.log(firstName.length);


//4- cases
console.log(firstName.toUpperCase());
console.log(
    firstName.toLowerCase()
)

//5 - slice
console.log(firstName.slice(0,4))


// 6- spli & join
console.log(firstName.split(" ").join(""))


//7 includes
console.log(firstName.includes("A"))

// 8- trim
console.log(firstName.trim());

let completeName= `${firstName}${secondName}`
console.log(completeName)