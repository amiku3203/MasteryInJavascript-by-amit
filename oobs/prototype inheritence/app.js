// Prototype inheritence is a mechanism in javascript that allows objects to iherit properties and methods from other objects. it is a fundamental concept in language and is based on the prototype model.in prototype inheritece objects can server as peototype for other objecrts m forming a hierarchical chain of inheritence.

// in Javascript , every object has an internal propertu called [[Prototype]](often rerfereed to as __proto__), which points to its prototype object,when you access a property or method on an object, and that property or method is not fouunde in thie object itself, javascript looks for it in the objects prototype(and further up the prototype chain),if nedded until it finds the property or reaches the top of the prototypr chain, which is usually Object.prototype.

function Animal(name) {
    this.name=name
}

Animal.prototype.sound=function(){
    return "Animal Sound"
}



function dog(name,breed) {
     this.name=name
 
    this.breed=breed
}

dog.prototype=Object.create(Animal.prototype)
dog.prototype.bark= function(){
    return "Hello"
}
const dog1=new dog("Buiddo","genus")
console.log(dog1.sound())
console.log(dog1.bark())