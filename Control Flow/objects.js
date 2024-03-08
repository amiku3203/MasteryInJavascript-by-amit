//OBJECTS

const person= {
    name: 'Amit kumar',
    age: 24,
    location:["planet","Earth"],
    isProgrammer:true,

}
// accening object
console.log(person.age)
console.log(person.location[1])
console.log(person["age"])

delete person.age;
console.log(person)

const p={
    10:"tem"
};
// here we can nonly access squae method
console.log(p[10])

