var count = 0;
document.getElementById('button').addEventListener('click', function() {
    count++;
    document.getElementById('message').textContent = count;

    if(count % 5 === 0) {
        document.getElementById('button').style.backgroundColor = 
        `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    };
    if(count === 10) {
        document.getElementById('info').textContent = 'Поздравляем! Вы достигли 10 кликов';
    };
});