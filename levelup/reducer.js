// the reduce() method applies the reducer function to each elemenys of an array,accumlation the results into a single value . It is often used to perform calculation or aggregations an array elements and simplify the array into a single value .


const number=[1,2,3,4,5,6,7,8,9];

const sum= number.reduce((prev,curr)=>{
    return prev+curr
},0)
console.log(sum)