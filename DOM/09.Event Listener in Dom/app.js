// In JavaScript, an event is a signal or a message that is generated by the browser or user action. An event can occur when a user interacts with a web page, such as clicking a button, or when a web page performs a specific action, such as loading or resizing.

// In JavaScript, you can listen for and respond to events using event listeners, which are functions that are executed when a specific event occurs. For example, you can create an event listener that changes the content of a web page when a user clicks a button, or that displays an error message when a user submits an invalid form.

// Some common events in JavaScript include:

// Click: triggered when a user clicks on an HTML element
// Submit: triggered when a user submits a form
// Load: triggered when a web page finishes loading
// Resize: triggered when a user resizes a web page
// Scroll: triggered when a user scrolls a web page
// Input: triggered when a user interacts with an input field
// Keydown: triggered when a user presses a key on the keyboard
// By using event listeners and responding to events, you can create dynamic and interactive web pages that respond to user actions and provide a better user experience.

// Bad way

// const secondbtn= document.querySelector(".second-btn");
// secondbtn.onclick= function () {
//     console.log("hell")
// }

// graet way
// const best= document.querySelector(".best");
// function greeting(){
//     console.log("gm")
// }
// best.addEventListener("click",greeting)

// event object

const form= document.querySelector("form")
const input= document.querySelector("input")
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    console.log(input.value)
}
    
    )