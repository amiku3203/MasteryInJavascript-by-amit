// the Object.create() methos cartaes a new
// an existing object as the prototype of the newly creating objects.

let person={
    greet: function () {
         console.log(`hello my name is ${this.firstName} ${this.lastName}   `)
    }
}
const ak=Object.create(person);
ak.firstName="amit"
ak.greet();

let john= Object.create(person,{
   firstName:{value:"John"},
   lastName:{value:"John1"}
})
console.log(john)
john.greet();