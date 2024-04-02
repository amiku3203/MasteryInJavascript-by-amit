// constructor function in javascript are regular function wsed with the new keywoird to create and initialize objects with shared properties and methods. they act as blueprints for creating multiple instances of objects with the same structure and behavior.

function CreatePeople(firstName, LastName, pl) {
    this.firstName=firstName // window
    this.LastName=LastName
    this.pl=pl
    this.info=function(){
        console.log(`Hello ${this.firstName} ${this.LastName} `)
    }
}
// NEW KEYWORD
//1 first create empty object {}
//2 sets this to point to that object
// 3 we can omit the return statement using "new "keyword



const john= new CreatePeople('John', 'Doe', 'F');
const amit=new CreatePeople("amit","kk","csk")
console.log(john)
console.log(amit)


// Built in constructor , also known as constructors , are native constructors, are standard constructors provided by Javascript that allow  you to create objects of various data types.these constructorsare available and do not need to be explicitlt defined. they provide a convenient way to create instances of primitive data types and built in objects.

const num2= new Number(10);
 const string= new String("Hello")
 const bool1= new Boolean(true);
 const arr1= new Array(1,2,3,4)

 