function createListWithDeleteButton(data) {
    const listElement = document.getElementById('myList');
    

    listElement.innerHTML = '';


    data.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = item;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Удалить';
        
        deleteButton.addEventListener('click', () => {
            listItem.remove();
        });

        listItem.appendChild(deleteButton);

        listElement.appendChild(listItem);
    });
}

const data = ['Элемент 1', 'Элемент 2', 'Элемент 3'];

createListWithDeleteButton(data);