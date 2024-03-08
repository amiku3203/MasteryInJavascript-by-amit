// Scope in Javascript refer to the current context  of code , which determined the acessibility of variable to javascript.

// there are two types of scope in javascript

// global Scope variables are those decleared outside of a block

//loacl scope variablles are those declered inside of a block 

let textMessage= "hi" //global variable

console.log(textMessage)

function showMessage(){
    let textMessage="hello" // local variable
    console.log(textMessage);
}
console.log(textMessage
    )

    const person= {
        name:"Amit",
        age:19,
        greet: function(){
            return `Hello , My name is ${person.name} and i am ${person.age} years old`
        },
    }

    console.log(
        person.greet()
    )