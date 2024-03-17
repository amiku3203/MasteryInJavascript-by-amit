// the ternary operator in javascript is a concise way of writing conditional expressions .it is the only javascript opreator that takes three operands: a condition followed by a question mark(?), an expression to execute if the condition evaluates to true is true, followed by a colon(:) , and a expression to execute if the condition is false 

// write a function to check  number is postive or not

function check(params) {
     if(params>0){
         return "number is positive"
     }else{
        return "number is negative"
     }

}
function check1(params) {
     return params>0 ? "number is positive":"number is negative"
}
console.log(check1(10))