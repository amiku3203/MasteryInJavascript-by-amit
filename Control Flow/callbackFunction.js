// when we provide function as an (argument) to other function that function is known as callback function.



function showCallFun(fn){
    const value=10;
    fn(value);
}

showCallFun(function(value){
   console.log(value)
})

function greet(name,cb){
   console.log(`Hello ${name}`)
   cb()
}

function cb(){
   console.log(`i am callback function`)
}
greet("Jhon", cb);