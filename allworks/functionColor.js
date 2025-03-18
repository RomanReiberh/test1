function changeBackgroundColor(element) {
    const colors = ['#ff0000', '#00ff00', '#0000ff'];

    setInterval(() => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        element.style.backgroundColor = randomColor;
    }, 1000);
}


const myElement = document.getElementById('myElement');
changeBackgroundColor(myElement);