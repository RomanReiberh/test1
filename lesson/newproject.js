document.addEventListener('DOMContentLoaded', () => {
    var signupButton = document.querySelector('.signup');
    var loginButton = document.querySelector('.login');

    signupButton.addEventListener('click', registrUser);
    loginButton.addEventListener('click', loginUser);
});

function registrUser() {
    var name = document.querySelector('.name').value.trim();
    var phone = document.querySelector('.phone').value.trim();
    var email = document.querySelector('.email').value.trim();
    var password = document.querySelector('.password').value.trim();


    clearErrors();

    var isValid = true;

    if (!validateName(name)) {
        displayError(document.querySelector('.name'), 'Имя должно содержать от 2 до 24 символов и только буквы.');
        isValid = false;
    }

    if (!validatePhone(phone)) {
        displayError(document.querySelector('.phone'), 'Телефон должен начинаться с "+" и содержать от 8 до 12 цифр.');
        isValid = false;
    }

    if (!validateEmail(email)) {
        displayError(document.querySelector('.email'), 'Email должен содержать "@" и быть не короче 7 символов.');
        isValid = false;
    }

    if (!validatePassword(password)) {
        displayError(document.querySelector('.password'), 'Пароль должен содержать от 5 до 26 символов.');
        isValid = false;
    }

    if (!isValid) {
        return;
    }


    var users = JSON.parse(localStorage.getItem('users')) || [];

    if (users.some(user => user.email === email)) {
        alert("Этот @mail уже зарегестрирован!");
        return;
    }


    var newUser = { name, phone, email, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    alert("Регистрация успешна!");


    document.querySelector('.name').value = "";
    document.querySelector('.phone').value = "";
    document.querySelector('.email').value = "";
    document.querySelector('.password').value = "";
}

function loginUser() {
    var email = document.querySelector('.emailLogin').value.trim();
    var password = document.querySelector('.passwordLogin').value.trim();

 
    clearErrors();

    if (!email || !password) {
        alert("Заполните пустые поля!");
        return;
    }

    if (!validateEmail(email)) {
        displayError(document.querySelector('.emailLogin'), 'Email должен содержать "@" и быть не короче 7 символов.');
        return;
    }

    if (!validatePassword(password)) {
        displayError(document.querySelector('.passwordLogin'), 'Пароль должен содержать от 5 до 26 символов.');
        return;
    }

   
    var users = JSON.parse(localStorage.getItem('users')) || [];
    var user = users.find(user => user.email === email && user.password === password);
    
    if (user) {
        alert(`Добро пожаловать, ${user.name}!`);
        document.querySelector('.emailLogin').value = "";
        document.querySelector('.passwordLogin').value = "";

        setTimeout(() => {
            window.location.href = "https://ru.freepik.com/photos/%D0%BA%D0%BE%D1%82%D0%B8%D0%BA%D0%B8";
        }, 100);
    } else {
        alert("Неверный email или пароль!");
    }
}



function validateName(name) {
    const regex = /^[a-zA-Zа-яА-Я]{2,24}$/;
    return regex.test(name);
}

function validatePhone(phone) {
    const regex = /^\+\d{8,12}$/;  
    return regex.test(phone); 
}

function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email) && email.length >= 7; 
}

function validatePassword(password) {
    return password.length >= 5 && password.length <= 26; 
}


function displayError(inputElement, message) {
    const errorElement = document.createElement('div');
    errorElement.classList.add('error');
    errorElement.textContent = message;
    inputElement.parentElement.appendChild(errorElement);
}

function clearErrors() {
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(error => error.remove());  
}



