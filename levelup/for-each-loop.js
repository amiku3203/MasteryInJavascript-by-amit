// when we call the function foreach helper we pass in anonymouse callbback function,
// this function gets called one time for every element in the array 
// wehatever is inside the function that logic happen

const colorArray = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'pink', 'brown', 'gray'];

// colorArray.forEach((color)=>console.log(color));
colorArray.forEach((color,index,arr)=>{
  arr[index]=color[0].toUpperCase()+ color.substring(1);
})
console.log(colorArray)