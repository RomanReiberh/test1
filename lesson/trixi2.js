// /*Создайте список (например, ul) и добавьте в него три элемента списка
//  (li) с текстом "Пункт 1", "Пункт 2", "Пункт 3". Затем добавьте этот список
// на вашу веб-страницу (Делаем с преподавателем). Можно попробовать использовать циклы. */
// let list = document.createElement('ul');
//     let liCount = +localStorage.getItem('liCount');
//     for(let i = 0; i < liCount; i++) {
//      let child = document.createElement('li');
//      child.innerText = `punkt ${i+1}`;
//      list.appendChild(child);
//     }
//     document.body.appendChild(list);
    



// document.addEventListener('DOMContentLoaded', function(){
    
// }
// )



// let image = document.createElement('img')
// image.setAttribute("src", "https://img.freepik.com/premium-photo/white-kitten-with-blue-hat-generative-ai_924660-674.jpg")
// document.body.appendChild(image);




// let end = document.createElement('p');
// end.innerText = 'Этот текст добавлен перед остальными';
// document.body.prepend(end)


// document.body.insertAdjacentHTML('beforebegin', '<h2>ЗАГОЛОВОК</h2>');


// (function(){
//     if(document.querySelector("#copied-image")) {
//         return true;
//     }
//     let originalImage = document.querySelector('#orig');
//     let cloneImage = originalImage.cloneNode(true);
//     cloneImage.setAttribute('id', 'copied-image')
//     document.body.appendChild(cloneImage);
// }())


// (function(){
//     if(document.querySelector("#child-dougter")) {
//         return true;
//     }
// const child = document.querySelector("#child-son");
// child.id = "ananas";
// }());

// (function () {
//     if (document.querySelector("#child-dougter")) {
//         console.log("Element #child-dougter найден");
//         return;
//     }

//     const child = document.querySelector("#child-son");
//     if (child) {
//         child.id = "ananas";
//         console.log("ID изменен на ananas");
//     }
// })();





const button = document.getElementById("myButton");
const counterButton = document.getElementById("counter");
let counter = 0;
button.addEventListener("click", function() {
    counter++;
    counterButton.innerHTML = `Количество нажатий: ${counter}`;
});