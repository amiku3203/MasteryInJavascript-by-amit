// classes are one of the features in the es6 version of javascript
// a class is a bluprint for the object , you can create an object from the class
// you can think of the class as a sketch (prototype) of a hoouse ,it contains all the details about the floors, doors, windows ,etc. Based on these description , you build the house 

// since many houses can be made from the same description , we can create many object form a class


// class declaration
class Person{
     constructor(firstName, lastName,age){
        // instances member
        this.firstName = firstName;
        this.lastName= lastName;
        this.age = age;
        this.printuserInfo=function(){
            return `${this.firstName} ${this.lastName},${this.age}`;
        }
     }
     //prototype memne
     greet(){
        return `hello ${this.firstName} ${this.lastName}`; 
     }
}

class Programmer extends Person{
     constructor(fs,ll,ll2){
      // call parent constructor
      super(fs,ll,ll2);
      this.fs = fs;
      this.ll=ll;
      this.ll2=ll2;
     }
}

 
const john= new Programmer("huxn", "John",23);
console.log(john)