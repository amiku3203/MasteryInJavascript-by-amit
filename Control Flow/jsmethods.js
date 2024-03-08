// setInterval

const intervalId=setInterval(()=>console.log(`set interval`),1000)

// setTimeOut

setTimeout(function () {
   
  clearInterval(intervalId);
}, 10000);
