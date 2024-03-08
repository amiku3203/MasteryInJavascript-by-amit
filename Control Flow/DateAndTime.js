// Date and Time in javascript 
// year , month, day, hours, minutes, seconds, milliseconds
const currnetDate= new Date(2024,2,24,12,30,0,0);

console.log(currnetDate);

const date= new Date();
const year= date.getFullYear();
const month= date.getMonth();
const day= date.getDate();
const hours= date.getHours();
const minutes= date.getMinutes();
const millisecond= date.getMilliseconds();

console.log(`Milisecond ${millisecond}`);
console.log(`Year:${year}`)
console.log(`Month:${month}`)
console.log(`Day:${day}`);
console.log(`Hours:${hours}`)
console.log(`Minutes:${minutes}`)

 
console.log(date.toDateString());
console.log(date.toISOString());
console.log(date.toLocaleString());

date.setDate(date.getDate()-1);
console.log(date);