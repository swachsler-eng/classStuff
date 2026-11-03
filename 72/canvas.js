const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

ctx.strokeRect(50, 50, 100, 100);
ctx.fillStyle = 'red';
ctx.fillRect(200, 50, 100, 100);
ctx.lineWidth = 5;

ctx.moveTo(50, 200);
ctx.lineTo(150, 300);
ctx.lineTo(50, 300);

ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = 'blue';
ctx.moveTo(50, 200);
ctx.lineTo(100, 300);
ctx.lineTo(50, 300);
ctx.closePath();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle = 'green';
ctx.arc(200, 200, 50, 0, Math.PI * 2);
ctx.stroke();


