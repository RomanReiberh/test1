const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let x = 200;
let y = 180;
const radius = 40;


function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);


  ctx.fillStyle = "rgb(66, 135, 245)";
  ctx.fillRect(50, 50, 200, 100);
  ctx.strokeStyle = "purple";
  ctx.lineWidth = 10;
  ctx.strokeRect(50, 50, 200, 100);


  ctx.beginPath();
  ctx.moveTo(60, 120);
  ctx.lineTo(120, 60);
  ctx.lineTo(280, 120);
  ctx.arc(115, 85, 5, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.strokeStyle = "green";
  ctx.lineWidth = 3;
  ctx.stroke();


  ctx.beginPath();
  ctx.arc(130, 93, 25, 0, Math.PI * 2);
  ctx.fillStyle = "rgb(252, 15, 192)";
  ctx.fill();
  ctx.strokeStyle = "orange";
  ctx.lineWidth = 2;
  ctx.stroke();


  ctx.beginPath();
  ctx.arc(115, 85, 5, 0, 2 * Math.PI);
  ctx.arc(145, 85, 5, 0, 2 * Math.PI);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.stroke();


  ctx.beginPath();
  ctx.arc(130, 100, 15, 0, Math.PI);
  ctx.strokeStyle = "black";
  ctx.lineWidth = 3;
  ctx.stroke();


  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.stroke();
}


draw();


document.addEventListener("keydown", function(event) {
  if (event.key === "ArrowUp") { 
    x = canvas.width - radius - 10;
    y = canvas.height - radius - 10;
    draw();
  }
});
