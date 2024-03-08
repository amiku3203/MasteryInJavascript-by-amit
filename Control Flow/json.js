const person=   {
    name: "Amit Kumar",
    age:23,
    email:"kumaramit28538@gmail.com",
    hobbies:["Reading", "Running", "Cooking"],
    address: {
         city:"Harraiya",
         idk:true
         
    }
}
//JSON.stringify()
const jsonString=JSON.stringify(person);
console.log(jsonString)
const parsedObject= JSON.parse(jsonString);
console.log(parsedObject);