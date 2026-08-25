const theButton = document.querySelector('#myButton');
theButton.style.backgroundColor = 'blue';
theButton.style.color = 'white';
theButton.style.fontSize = '20px';

theButton.className = 'btn btn-primary';
for (let i = 0; i < 500; i++) {
    theButton.style.top + 1;
}