// every -the every method tests whether all elemts in the array pass the condition specified by the provided callback function.it returns true if the callback function return true for every elements , and false if any elemment fails the condition specified by the provided callback function

// the some methods tests whether at least one element in the array pass the condition specified by the provided callback function. 


const people = [
    {
      name: 'John Doe',
      age: 35,
      city: 'New York'
    },
    {
      name: 'Jane Smith',
      age: 28,
      city: 'Chicago'
    },
    {
      name: 'Bob Williams',
      age: 42,
      city: 'Los Angeles'
    },
    {
      name: 'Alice Johnson',
      age: 30,
      city: 'San Francisco'
    },
    {
      name: 'Charlie Brown',
      age: 45,
      city: 'Miami'
    }
  ];
console.log( people.every((people)=>people.age<10))
console.log(people.some((people)=>people.age>30));
 