function Stored() {
    return localStorage.getItem('buttonItem') || '1';
} ;

function button() {
    var currentValue = Stored();
    var newValue = currentValue === '1' ? '0' : '1'

localStorage.setItem('buttonItem', newValue)
document.getElementById('status').textContent = newValue
}
document.addEventListener('DOMContentLoaded', function() {
 document.getElementById('status').textContent = Stored();
 document.getElementById('button').addEventListener('click', button)
});






document.addEventListener('DOMContentLoaded', function() {
var input = document.getElementById('inp');
var button = document.getElementById('submit');
var lesson = document.getElementById('lesson');
var clear = document.getElementById('clear');

input.value = localStorage.getItem('savedInput') || '';

button.addEventListener('click', function(event) {
event.preventDefault();

localStorage.setItem('savedInput', input.value);
alert ('SAVED')

});
lesson.addEventListener('click', function () {
    input.value = localStorage.getItem('savedInput') || '';
});
clear.addEventListener('click', function() {
    input.value = '';
    localStorage.removeItem('savedInput');
});
});


