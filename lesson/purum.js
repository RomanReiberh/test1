const form = document.querySelector('form');
const input = document.getElementById('inp');

form.addEventListener('submit', function(event) {
    const inputVal = input.value;
    if (!inputVal.includes('@')) {
        alert("Введите корректный email");
        event.preventDefault();
    }else {
     alert("Форма отправлена")
    }
});


const form1 = document.getElementById('languageForm');
const select = document.getElementById('language');
form1.addEventListener('submit', function(event) {
  event.preventDefault();
  const selectedLanguage = select.value;
  alert(`Язык выбран: ${selectedLanguage}`);
});



const form2 = document.getElementById('colorForm');

form2.addEventListener('submit', function(event) {
  event.preventDefault();
  const selectedColor = document.querySelector('input[name="color"]:checked');
  if (selectedColor) {
    document.body.style.backgroundColor = selectedColor.value;
  } else {
    alert('Выберите цвет!');
  }
});



const textInput = document.getElementById('textInput');
const pixel = document.getElementById('pixel');

textInput.addEventListener('input', () => {
  pixel.textContent = textInput.value.length;
});




const TNT = document.getElementById('TNT1');
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');

TNT.addEventListener('submit', function(event) {
  event.preventDefault();

  const firstName = firstNameInput.value.trim();
  const lastName = lastNameInput.value.trim();

  if (firstName && lastName) {
    console.log(`Имя: ${firstName}, Фамилия: ${lastName}`);
  } else {
    console.log('Что-то пошло не так  :((');
  }

  firstNameInput.value = '';
  lastNameInput.value = '';
});