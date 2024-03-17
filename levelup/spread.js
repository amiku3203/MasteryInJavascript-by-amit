// the spread opreator is a new addition to the set of opretors in javascript es6.
// it takes in an literals (e.g array) and expands it inti individual elements.
//the spread opreator is commonly used to make shallow copies of   js objects.
//using this opreator makes the code concise and enhance  its readeability

// function array objects

function giveMe4(a,b,c,d){
     console.log("a",a)
     console.log("b",b)
     console.log("c",c)
     console.log("d",d)
}

const coloe=['red','blue' ,'green','yellow']

giveMe4(1,2,3,4)
// giveMe4(coloe)
giveMe4(...coloe)

console.clear();

const strnums= ['one','two','three','four']
const moreStrnms=['four','five','six']
const  concat=[...strnums, ...moreStrnms];
console.log(concat)

let pepoles=["a","b","c","d","e","f","g","h"];
console.log('k',...pepoles);


const obj1={x:1,y:2}
const obj2={z:3}
const obj3={...obj1,...obj2}
console.log(obj3)

const clone={...obj1, r:4};
console.log(clone)