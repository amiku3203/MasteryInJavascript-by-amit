 
 // polymorphism allows objects to be treated as instances of theri parent class , even if they are instance of a subclass , this is faciklities writtig code that works eith diffrnet tyoes of objects in gnreic way . in javascript , polymorphism is achieved through method overriding where a sub class provides its own implementation of a methos that is already  defined in the parent class ,the code can then use the same methos to work both parent and subclass instances .

// in javascript , polymorphism is typically achieved through method overriding , where a subclass provides its own implementation of a method that is already defined in the parent class .

class Animal {
  constructor(name){
    this.name = name;
  }
  makeSound(){
    return "Unknown sound"
  }

}

class Dog extends Animal{
   constructor(name) {
     this.name=name
   }
   
   // overriding
   makeSound() {
      return 'Woof!';
   }

}

 function animalInfo(animal){
    console.log(`Animal: ${animal.name}`)
    console.log(`Sound ${animal.makeSound()}`)
 }

 const generocAnima= new Animal("Genric animal");
 animalInfo(generocAnima)


 const dog= new Dog("jhguy");
 animalInfo(dog)
