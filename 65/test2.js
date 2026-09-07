
// // export default function () {


//     const clockElem = document.createElement('div');
    
//     document.body.appendChild(clockElem);

//     clockElem.style.color = 'blue';
//     clockElem.style.backgroundColor = 'yellow';
//     clockElem.style.display = 'inline-block';
//     clockElem.style.padding = '10px';
//     clockElem.style.fontSize = '2rem';
//     clockElem.style.fontFamily = 'monospace';
//     clockElem.style.fontWeight = 'bold';

//     setInterval(() => {
//         clockElem.textContent = new Date().
//             toLocaleTimeString();
//     }, 1000);
// // }


// export default function () {


    const clockElem = $('<div></div>');
    
    $('body').append(clockElem);

    clockElem.css('color', 'blue');
    clockElem.css('backgroundColor', 'yellow');
    clockElem.css('display', 'inline-block');
    clockElem.css('padding', '10px');
    clockElem.css('fontSize', '2rem');
    clockElem.css('fontFamily', 'monospace');
    clockElem.css('fontWeight', 'bold');

     setInterval(() => {
       clockElem.text(new Date().toLocaleTimeString());
     }, 1000);
// }
