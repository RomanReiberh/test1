var input = document.querySelector('#input');
var button = document.querySelector('#button');

var savedName = localStorage.getItem('username');
if(savedName) {
    input.value = savedName
};

button.addEventListener('click', function() {
    var name = input.value;
    localStorage.setItem('username', name)
});





function writeLocalStorage(key, value) {
    localStorage.setItem(key, value);
};
writeLocalStorage('username', 'Evgeniy');
writeLocalStorage('theme', 'rose');


function readLocalStorage(key) {
    return localStorage.getItem(key)
};
var username = readLocalStorage('username');
console.log(username);