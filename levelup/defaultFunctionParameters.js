// default function parameter , introduced in es6, allow you to assign default values to function parameters. when a function is called , and an argument is not provided for a parameter, the default value will be used instead. this features make it easir to handle cases where arguments might be missing or undefined

function countTo5(count=true){
     if(count===true){
        for(let i=0; i<=5 ; i++){
            console.log(`Count: ${i}`);
        }
     }
}
countTo5()


function ratings(rate=0){
     if(rate===5){
        console.log(`High Ratings:`)
     } else if(rate===0){
        console.log(`low Ratings:`)
     }

    }
    ratings()


    function muliply(a, b=5){
        console.log(a*b);
    }
    muliply(8);
