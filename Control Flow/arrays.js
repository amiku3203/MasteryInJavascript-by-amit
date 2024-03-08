// Arrays-> 0 index based
// empty array
const myList=[1,2,3,4,5,6,"eat"];
console.log(myList)

// accesing items from an array
console.log(myList[0]);
console.log(myList[1]);

// nested  array

const nextArr=["new",["hwe", "jkduhuio"]]
console.log(nextArr[1][1]);

const fruites= [
    "apples",
    "magoes",
    "bananas",
    "straberry",
     "pineapple",
     "grapefruit"
]

// push
console.log(fruites.length)
fruites.push("liwi"); // push in last
console.log(fruites);
console.log(fruites.length)

fruites.pop(); // remove last element
console.log(fruites)

//shift
fruites.shift(); // remove first element
console.log(fruites)

// unshift
fruites.unshift("orange") //insert begining of the array
console.log(fruites)

// concat
const newFruites= ["sadf", "sadfd", "sadf"]
const titalfruite= fruites.concat(newFruites);
console.log(titalfruite);

console.log(newFruites.join("-"));

console.log(newFruites.reverse());

// slice
console.log(fruites.slice(0,1));

console.log(fruites.sort());