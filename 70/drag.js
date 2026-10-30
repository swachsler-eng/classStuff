const box = document.querySelector('.box');

box.addEventListener('mousedown', (e) => {
    console.log('mousedown');
});

box.addEventListener('mousemove', (e) => {
    console.log('mousemove');
    box.style.top = `${e.clientY}px`;
    // box.style.left = `${e.clientX}px`;
});

box.addEventListener('mouseup', (e) => {
    console.log('mouseup');
});

