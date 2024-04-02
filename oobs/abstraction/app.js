 // abstraction is the process of simplifying complex suystems by breaking them into down intp smaller , manageable parst,it allows you to focus on the essential features of an object anfd hide unnecessart details. In javascript, you can use abstract classes to define abstract sructires and then implement them use abstract classes to define abstract structures and the implement them un concrete objects .


 class Animal {
  constructor(name){
    this.name=name;

   
  }
   //Abstracts methos (to be implemented by subclass)

   makeSound(){
       throw new Error("mthod  (makeSound) must  be implemented ")
   }
 }

 class Dog extends Animal{
  constructor(name){
    super(name)
  }

  // implements abstarcat meth
  makeSound(){
    return "woff"
  }
 }

 class Cat extends Animal{
  constructor(name){
    super(name);
  }
  makeSound(){
    return "Meow!"
  }
 }

 const dog= new Dog("Buddy");
 console.log(dog.name)
 console.log(dog.makeSound());


 const cat= new Cat("kitty"); 
 console.log(cat.name)
 console.log(cat.makeSound());


//  ******
// ---------- Define
// In this example, we have an abstract class Animal that contains an abstract method makeSound(). The makeSound() method is declared in the Animal class but doesn't provide an implementation. It's meant to be implemented by subclasses like Dog and Cat.

// The Dog and Cat classes are concrete subclasses that inherit from the Animal class. They implement the abstract method makeSound() with their own specific implementations for making sounds.

// By using abstraction, we define a common interface (makeSound()) that each subclass must implement, while hiding the internal details of how each animal makes its sound. This simplifies the code and allows us to work with animals at a higher level of abstraction, without worrying about the specifics of each animal's sound implementation.