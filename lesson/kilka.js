document.getElementById('button').addEventListener('click', function() {
    var correctLogin = 'roman';
    var correctPassword = '1234';

    var userLogin = document.getElementById('input1').value;
    var userPassword = document.getElementById('input2').value;
    var messageElement = document.getElementById('message');

    if(userLogin === correctLogin && userPassword === correctPassword) {
        messageElement.textContent = "Успешная аутентификация";
        messageElement.style.color = 'green'
    }else{
        messageElement.textContent = "Неверные поля ввода";
        messageElement.style.color = 'red'
    }
})
