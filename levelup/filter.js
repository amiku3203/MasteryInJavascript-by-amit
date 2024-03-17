// the filter() method is a build-in array method in javascript that allows you to create a new array conataing elemests that pass a certain condition . it provides a clean and concise way to filter out elemets from an array based on a special criteria

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
console.log(projectArray.filter((song)=>song.id>2))

