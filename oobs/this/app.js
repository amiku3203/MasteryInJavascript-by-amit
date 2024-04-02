// console.log(window)
// console.log(this) // refer to window object
// console.log(this===window) // true
// this is a special keyword in javascript that refers to the current executing context/object, it can be used inside any function and always
//  window.firstName="Lucifer"
//  console.log(window)
//  this.lastName="morningstar"
//  console.log(window)

// function printThis(){  //windwo object
//      return this;
// }
//  const res= printThis();
//  console.log(res)

// const obj={
//     firstName:"Amit",
//     lastName:"Webdec",
//     fullName: function(){
//         return `${this.firstName}`; // "oweber " object 
//     }
// }

// const res=obj.fullName();



// const obj={
//     firstName:"Amit",
//     lastName:"Webdec",
//     fullName: ()=>{
//         return  this // "window " object 
//     }
// }
// const res= obj.fullName();
// console.log(res)