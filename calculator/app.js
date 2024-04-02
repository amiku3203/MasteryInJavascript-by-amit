const  display= document.querySelector("#display")

const buttons= document.querySelectorAll(".number-button")
 
let  target="";
for(let i=0; i< buttons.length; i++) {  
     buttons[i].addEventListener("click",(e)=>{
            let x= buttons[i].innerText;
            if(x==="C"){
                target="";
                display.innerText="";
            } else if(x==="="){
                const val= eval(target);
                 if(val<0){
                    val="undefined"
                 }
                display.innerText=val;
            }  else {
                 target+=x;
                 console.log(target)
                 display.innerText=target;
            }
         
     })
}