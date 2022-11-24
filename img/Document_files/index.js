const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = "orange";
ctx.arc(100, 100, 50, 0, Math.PI*2);
ctx.fill();

ctx.fillStyle = "red";
ctx.arc(400, 300, 50, 0, Math.PI*2);
ctx.fill();