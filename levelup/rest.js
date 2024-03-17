//the rest parameter syntax allows a function to accept an indefinite number of arguments
//as an array , providing a way to represent variadic functions in js

function user(something,...userData){
    console.log(something)
    console.log(userData)
}

user("hello",19,"programming", "football")