// destructuing allow us to "unpack" values from data structures (Array,objects) into seprate distinct variables.

// array 
// const foo=['one','two','three','four','five','six','seven','eight'];
 
// const[one,two]=foo;
// console.log(one)
// console.log(two)

// let a,b;
// [a=5,b=8]=[1];
// console.log(a);

// function f(){
//     return [1,2];
// }
// let c,d;
// [c,d]=f();
// console.log(c,d)

// //also we can ignore values 

// // assingning the rest of an array to a variable

//  const [e, ...g]=["one","two","three"]
//  console.log(e)
//  console.log(g)

//  const person={
//     name:"John",
//     age: 30
//  }
//  const{name,age}=person;
//  console.log(name)
//  console.log(age) 

 console.clear();
 // object destructing and rest opreator 

 let {a , b, ...rest}={a:100,b:200,c:300,d:400,e:500};

 console.log(a)
 console.log(b)
 console.log(rest);

 const person ={
     name:"Amit",
     age:30,
     gender:"male",
     country:"USA"
 }
 const {name:personName, age:personAge, country:personCountry} = person;
 console.log(personName,personAge,personCountry)
 // function dest

//  function printPername(params) {
//     console.log(`Name: ${params.name}`)
//     console.log(`Age: ${params.age}`)
//   console.log(`Country: ${params.country}`)
    
//  }
//  printPername(person)
 
function printPername({name,age,country}) {
    console.log(`Name: ${name}`)
    console.log(`Age: ${age}`)
  console.log(`Country: ${country}`)
    
 }
 printPername(person)
 