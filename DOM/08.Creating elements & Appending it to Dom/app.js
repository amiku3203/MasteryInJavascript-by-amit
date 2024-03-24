

// createElement 

// const h1=document.createElement('h1');
// const body= document.body;
// h1.textContent="hello world"
// h1.classList.add("like")
// h1.style.backgroundColor="red"
// console.log(h1)
 
// body.appendChild(h1)


//insertBefore

// const ul= document.querySelector("ul")

// const newLi=document.createElement("li");
// newLi.innerText="i ma li tage"
// ul.appendChild(newLi)

// const firstl= document.querySelector("li");

 
// ul.insertBefore(newLi,firstl)


// const firstp=document.querySelector("p")

// const i= document.createElement("i")

// i.innerText="Im italics"
// i.style.color="skyblue"
// firstp.insertAdjacentElement("beforebegin",i)
// firstp.insertAdjacentElement("afterbegin",i)
// firstp.insertAdjacentElement("beforeend",i)
// firstp.insertAdjacentElement("afterend",i)


// append prepend


let section= document.querySelector("section")


const i= document.createElement("i")

i.innerText="Im italics"
i.style.color="skyblue"

const h4= document.createElement("h4");
h4.innerText="hmm hi ho"
h4.style.color="green"
section.append(i)