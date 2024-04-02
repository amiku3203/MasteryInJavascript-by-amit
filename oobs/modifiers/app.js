// modifiers
//class modifiers also known as acces modifiers or visibilit modifiers , are keyword in oop language that define thr visibility or accessibility of class members(fields, methods, and nested classes) from other part of the program. they control the level of encapsulation and help enforce encapsulation priniciples by restricting direct access to certain class member ,'

// in javascript , class modifier are used int the context aof classes and object although javascript does not have traditional access modifiers like some other language eg-java, however , you can achieve similar effects using diffrent conventions and techniques

// private 
// public
// protected

function myClass(publicField, priateField, protectedField) {
     // public field
     this.publicField = publicField;

   // private field (closure)
   const _privateField=priateField;

   // protected Field
   const _protectedField = protectedField;

   //publiic method
   this.publicField=function(){
    return  `public field ${publicField}`
   }
 
   //privatr 
    function _privateMethod(params) {
        return `private method ${_privateField}`
    }

    // protected 
    function _protectedMethod(){
        return `protected method ${_protectedField}`
    }
 
  // method to acceMes protected methods
  this.accessProtectdMethod=function ( ) {
      return _privateMethod();
  }

}

const myObject= new myClass("public", "private", "proted");
// console.log(myObject.publicField)
// console.log(myObject._privateField)
// console.log(myObject._protectedField)
console.log(myObject.publicField())
console.log(myObject._privateMethod())
console.log(myObject._protectedMethod())