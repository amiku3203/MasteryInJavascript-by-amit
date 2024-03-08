// a function is  a block of code that perform a specific task
// function makes the code reuseable . you can declare it once and use it multiple times
//function makes the program easier as each small task is divided inti a function.
//function increase readability
//DRY- do not repeat yourself
// function name(parameter){}

function greet(){
    console.log("Hello from a function")
}

// call run execut
greet();

function sayHello( username){
   console.log(username);
}

sayHello("amit");
sayHello("exwc");


// return ->function
function add(x,y) {
     return x+y;
}

console.log(add(10,20))

// function expression

const greetin=function (user){
    console.log(user)
}
greetin("hx");

