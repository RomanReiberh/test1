function toggleMenu() {
    document.getElementById('menu').classList.toggle('open');
    document.getElementById('overlay').classList.toggle('active');
}

function closeMenu() {
    document.getElementById('menu').classList.remove('open');
    document.getElementById('overlay').classList.remove('active');
}