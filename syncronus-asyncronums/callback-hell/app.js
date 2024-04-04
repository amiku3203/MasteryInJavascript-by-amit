 function callbackHell(callback) {
     setTimeout(() => {
         const data= "inside (callbackHell) function"
           console.log(data)
           callback(data);
        },2000);
 }

 function firstFunc(data, callback) {
     setTimeout(()=>{
         const processedData= `${data}-Processed First`
         console.log(`inside (firstFunc) Function`)
         callback(processedData)
     },1000)
 }

 
 function secondFunc(data, callback) {
    setTimeout(()=>{
        const processedData= `${data}-Processed secons`
        console.log(`inside (secodefunc) Function`)
        callback(processedData)
    },1500)
}


// callback Hello


// callbackHell((data)=>{
//      firstFunc( data, (proceedData1)=>{
//         secondFunc( proceedData1,(processdata2)=>{
//                 console.log(`Final result all function -> ${processdata2}`)
//         })
//      });
// });

// callback function is not always asyncronus

console.log(`start`)

const number= [1,2,3,4,5,6,7,8,9]

number.forEach((n)=>console.log(n))

console.log(`end`);