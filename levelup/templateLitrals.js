// template strings , also known as template literals , are a feature to javascript that allows you to craete string with embedded expression. they are denoted by vackticks insted of single or double quotes . Template strings provide a more flexible and concise way to construct strings, especially when they involve variables or expressions.

console.log(`this is a some random text
and this is another one`);
console.log(`${2+2}`);

const firstName= "Amit"
const lastName="webdev"

console.log(`${  ["one", "two", "three"]} ${firstName+lastName}`);

function info(){
return `My name is ${firstName+lastName} `
}
console.log(`${info()}`);