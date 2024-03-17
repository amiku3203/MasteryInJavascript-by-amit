// set is a built in data structure introduced in es6  that represents a collection of unique values. unlike arrays, set allows you to store only unique values values, which means duplicate values are automatically removed. each value can have occure  only once within a set.
// set objects are useful when you need to store a list of unique elements and quicklt check for the existence of a specific value



// const init=[1,2,3,3,3,3];
// const set=new Set(init);

const myset= new Set();
myset.add("a" )
myset.add("b" )
myset.add("a" )
// console.log(myset)
// console.log(myset.has("a"))
// myset.delete("a");
// myset.clear();
// console.log(myset)
for(let item of myset){
console.log(item)
}