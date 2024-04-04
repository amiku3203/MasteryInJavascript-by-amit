// async is a special function that is designed to opreate asynchronously , meanig that it can perform tasks in the background while other code continue to execute. Async funxtions are marked with th async keyword

//the await opreator is used to wait for a promise. it can only be used inside an async function withinv regular javascript code.

// function fethdata() {
//   return  new Promise((resolve, reject) => {
//        setTimeout(() => {
//         resolve("USER DATA")
//        }, 4000);

//     })
// }

// async function getUser(){
//     try {
//         const data= await fethdata();
//         console.log(data); // USER
//     } catch (error) {
//         console.log(error)
//     }
// }

// getUser();

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = "Insidde (callbsckHell) function";
      console.log(data);
      resolve(data);
    },2000);
  });
}

function firstfunc(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const proceeseddData = `${data}- processed data`;
      console.log(`inside (firstfunc) function`);
      resolve(proceeseddData);
    }, 2000);
  });
}

function secondFunc(data) {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const proceeseddData = `${data}- processed data`;
      console.log(`inside ( second func) function`);
      resolve(proceeseddData);
    }, 2000);
  });
}

async function devil() {
  try {
    const data = await fetchData();
    const processedData = await firstfunc(data);
    const processdata2 = await secondFunc(processedData);
    console.log(`final done`);
  } catch (error) {
    console.log(error);
  }
}
devil();
