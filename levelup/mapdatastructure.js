/// Map is a built -in data structure introduced  in es6 that allows you to store key value pairs where bothe the key and value can be of any data type. it is similar to an object , but with a few key diffrences

// -> key can be any data type: Unlike objects, where keys are limites to strings and sumbols, Map allows you to  use any data type as keys, including numbers,booleans, objects ,and even other Map instances

//-> maintains insertion order: Map preserves the order of key -value pairs as they were inserted , while objects key may not be guranteed to be in a specific order

// itreation- MAp provides  built in methids for easy itreations over its elements 


const map=new Map();

const  key1= "amit";
const key2={};
const key3= function(){};

map.set(key1,"value of key1");
map.set(key2,"value of key2");
map.set(key3,"value of key3");

// console.log(map.keys());
// console.log(map.values())
// console.log(map.delete(key1))
// console.log(map.size)
// console.log(map)
//  for(let [key, value] of map){
//     console.log(key,value)
//  }

// for(let key of map.keys()){
//     console.log(key)
// }
// for(let value of map.values()){
//     console.log(value)
// }


const map1= new Map();
map1.set("a",1);
map1.set("b",2);
map1.set("c",3);
console.log(map1.get("a"))
console.log(map1.size);
console.log(map1.delete("a"));