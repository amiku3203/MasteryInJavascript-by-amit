//the find method is another build in array helper in javascript that allows you to find the first element in a array that matches a specific condition. it returns the value of the first element that specofies the given testing function , or undefined if no element  is found
const projectArray = [
  {
    id: 1,
    name: "Project 1",
    description: "A description of Project 1",
  },
  {
    id: 2,
    name: "Project 2",
    description: "A description of Project 2",
  },
  {
    id: 3,
    name: "Project 3",
    description: "A description of Project 3",
  },
  {
    id: 4,
    name: "Project 4",
    description: "A description of Project 4",
  },
  {
    id: 5,
    name: "Project 5",
    description: "A description of Project 5",
  },
];
console.log(projectArray.find((person)=>person.name="Project 5"))