let trixi = document.getElementById('btn');
trixi.addEventListener('click', function() {
    trixi.setAttribute('style', 'width: 250px; height: 50px;');
});

let btn1 = document.getElementById('btn1');
btn1.addEventListener('click', function(event) {
    event.target.style.cssText = 'width: 250px; height: 50px; background-color: green';
});



const div = document.getElementById('myDiv');
const class1 = document.querySelectorAll('.class1');

class1.forEach(function(button) {
    button.addEventListener('click', function() {
        div.classList.add('active');
        console.log('"active" добавлен.');
    });
});
class1.forEach(function(button) {
    button.addEventListener('click', function() {
        div.classList.remove('highlight');
        console.log('"highlight" удален.');
    });
});