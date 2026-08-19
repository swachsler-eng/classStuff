'use strict';
/*global x,y*/
// console.log(x, y)
// console.log('Hello World')
// alert("hello from js");
// const state = prompt("how are u");
// console.log("you are feeling", state);
// // alert("you are feeling" + state);
// alert(`You are feeling ${state}`);
let clicks = 0;
const theButton = document.querySelector('#button');
const theCount = document.querySelector("#count");
console.log(theButton);
function ButtonWasClicked() {
    console.log(`button was clicked ${++clicks} times`);
    theCount.textContent = clicks;
}
theButton.addEventListener("click", ButtonWasClicked);