// a promise is an object representing the eventual
// completion or failure of an asynchronous operation.

// new Promise()
// a javascript promise object contains both the producing code and calls to the consuming code . it can be deal with Asynchronous opreation in javascript

// 3 stats->
// 1-> Pending
// 2->fulfilled/resolved
// 3->Rejected

// 1-> initial State not yet fulfilled or Rejected
// 2->Promise completed
// 3-> Promise Failed

// promise-> resolved-> .then() || .finally()
// promise -> rejected -> .then() .catch() .finally()

// .then() is method used  to handle the succefull outcomes of a promise in javascript. it takes 2 argguments(onfullfill, onrejected)


// .catch() is method returns a promise deals with rejected case only 

// const newPromise= new Promise((res, rej)=>{
//     let req=20;
//     req==20? res("Request Succesfully"): rej("Request Failed")
// })
// .then((val)=>{
//      console.log(val);
// })
// .catch((err)=>{
//     console.log(err)
// })

// function checkNumber(number){
//      return new Promise((res,rej)=>{
//            if(number%2===0){
//              res(`${number} is an even number`)
//            } else {
//             rej(`${number} is not an even number`)
//            }
//      })
// }

// checkNumber(30).then((ans)=>{console.log(ans)}).catch((err)=>{console.log(err)})

// function fetchData(){
//      return new Promise((resolve)=>{
//         setTimeout(()=>{
//              const data= "Insidde (callbsckHell) function";
//              console.log(data);
//              resolve(data);
//         })
//      })
// }

// function firstfunc(data){
//      return new Promise((resolve, reject)=>{
//        setTimeout(()=>{
//          const proceeseddData= `${data}- processed data`
//          console.log(`inside (firstfunc) function`)
//          resolve(proceeseddData)
//        },2000)
//      });
// }

// function secondFunc(data){
//     new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             const proceeseddData= `${data}- processed data`
//             console.log(`inside ( second func) function`)
//             resolve(proceeseddData)
//         },2000)
//     })
// }

// fetchData().then(data=>firstfunc(data)).then((processdta1)=>secondFunc(processdta1)).then(proceeseddData2=>console.log("finally")).catch((err)=>console.log(err))