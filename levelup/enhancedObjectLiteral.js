function user(name, age, work) {
  return {
    name,
    age,
    work,
     function () {
      console.log(`My name is ${name} and my age is ${age}`);
    },
  };
}

const hey = user("amit", 23, "Programmer");
const ye = user("alex", 34, "Coder");
console.log(hey);
console.log(ye);
