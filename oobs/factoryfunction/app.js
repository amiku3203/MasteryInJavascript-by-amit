// A factory function is a type of function that is used to create and return objects . its a design pattern that provides an alternative way to create obects compared to using constructors and the new keyword.
 
// let user = {
//   firstName: "Amit",
//   lastName: "WebDev",
//   fullName: function () {
//     console.log(`Hello my name is ${this.firstName} ${this.lastName}`);
//   },
// };

// repeat it 100 times
// factory function
function createPerson(fs, ln, pl) {
    return {
      fs: fs,
      ln: ln,
      pl: pl,
      fullName: function () {
        console.log(`Hello ${this.fs} ${this.ln} `);
      },
    };
  }
  
  const john = createPerson("john", "chand", "python");
  john.fullName();
 