//the map() method creates a new array populated with the results of calling a provided function an every element in the calling array
const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let double= numberArray.map((nums)=>nums*2);
console.log(double)
console.log(numberArray)