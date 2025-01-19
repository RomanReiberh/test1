document.addEventListener('DOMContentLoaded', () => {
let block = document.getElementById('block');
let origColor = getComputedStyle(block).backgroundColor;
block.addEventListener('mousemove', () => {
  block.style.backgroundColor = 'red';
});
block.addEventListener('mouseleave', () => {
    block.style.backgroundColor = origColor;
});
});



let colorBlock = document.getElementById('colorBlock');
let colorButton = document.getElementById('colorButton');

function getRandomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
colorButton.addEventListener('click', function(){
  colorBlock.style.backgroundColor = getRandomColor();
});
