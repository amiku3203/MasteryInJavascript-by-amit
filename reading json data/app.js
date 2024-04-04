
// async function render(){
//       try {
//          const response= await fetch("https://jsonplaceholder.typicode.com/todos");
//          if(!response.ok){
//               throw new Error(response.statusText)
//          }
//          const data= await response.json();
//           console.log(
//           data
//           )
//       } catch (error) {
//         console.log(error)
//       }
// }

// render();

async function  fetchdata(){
       await fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res)=>res.json())
        .then((data)=>console.log(data))
        .catch((err)=>console.log(err))
}

fetchdata();    
