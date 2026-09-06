
let clicks = 0;

const theButton = document.querySelector('#myButton');

theButton.addEventListener('click', function () {
    clicks++;
    console.log(`Button clicked ${clicks} times!`);
    theButton.textContent=clicks;
});
