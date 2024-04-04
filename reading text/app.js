// callback
// new Promise
// async await
// fetch("text.txt")
//   .then((res) => res.text())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

async function hell(){
    try {
        const data =await fetch("text.txt");
        if(!data.ok){
            throw new Error("response not ok")
        }
     const data2= await data.text();
     console.log(data2)
    } catch (error) {
        console.log(error)
    }
     
}
hell();