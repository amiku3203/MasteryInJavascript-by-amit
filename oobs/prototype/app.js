/// every javascript object has a anonymous proerty called "prototpye"
//Remember function & arrays also a object
// that prototype will b e the parent of that object , prototype property is object by itselef , which have special properties & methos

// every object is associated with another object
// that object (a) is associated with [[Prototype]] object
// ->which means a object will be inherit all properties of Object.prototype || [[Prototype]] object

// we can check the prototype of something in 3 ways:
//-> obj.__proto__
//-> obj.constructor.proptotype
//->object.getPrototypeOf(a)

// const obj= {};
// console.log(obj)
// // console.log(obj.__proto__.__proto__);
// console.log(obj.constructor.prototype)
// console.log(Object.getPrototypeOf(obj))

// const arr= new Array();
// console.log(arr)


// ***********changing the built-in Method 

// console.log(Array.prototype)

// Array.prototype.pop=function(){
//      return "POP IT UP BABY"
// }

// const myArr=['one','two','three','four','five','six'];
// console.log(myArr.pop())
// console.log(myArr)


// String.prototype.HelloMethod=function(){
//     console.log(this)
//     console.log(this.toUpperCase())
// }
// console.log("Hii i am Hello".HelloMethod())

// const arr=['one','two','three','four','five','six']
