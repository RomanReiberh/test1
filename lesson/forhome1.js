let mus = document.getElementById('music');
if (mus.lastElementChild) {
    const newList = document.createElement('li');
    newList.textContent = 'New Element';
    mus.replaceChild(newList, mus.lastElementChild);
    console.log('Last element chenged');
} else (
    console.log('Void')
);
