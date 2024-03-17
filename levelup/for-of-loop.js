// the for of loop in javascript is a modern itreation statement introduced in es6 that provides a concise and easy way to loop over elements in itreable objects like arrays,strings,maps,sets, and more. it allows you to itreate directly over the values of the elemets, rather than dealing with indices or keys , which makes the code more readable and less error-prone.
// for(variable of itreavle){..}

const arrayOfValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let value of arrayOfValues){
    console.log(value)
}