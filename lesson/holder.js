let form = document.getElementById('mainForm');
let emailInput = document.getElementById('email');
let passwordInput = document.getElementById('password');
let messageDiv = document.getElementById('message');

function validateForm(event) {
    event.preventDefault();
    messageDiv.style.display = 'none';
    messageDiv.innerText = '';
    let email = emailInput.value;
    let password = passwordInput.value;
    if(!email.includes('@')){
        messageDiv.style.display = 'block'
        messageDiv.innerHTML = 'Введена неверная почта без символа "@".';
        return;
    };
    if(password.length <= 6) {
        messageDiv.style.display = 'block';
        messageDiv.innerHTML = 'Пароль слишком короткий';
        return;
    }
    form.reset()
    messageDiv.style.color = 'green';
    messageDiv.innerHTML = 'Форма успешно отправлена';
};

form.addEventListener('submit', validateForm);
let resetBtn = document.getElementById('resetBtn');
resetBtn.addEventListener('click', function() {
form.reset();
messageDiv.style.display = 'none';
})
