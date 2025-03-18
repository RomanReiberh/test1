let index = 0;

function updateSlider() {
    document.querySelector(".slider-container").style.transform = `translateX(${-index * 300}px)`;
    updateIndicators();
}

function nextSlide() {
    index = (index + 1) % 3; 
    updateSlider();
}

function prevSlide() {
    index = (index - 1 + 3) % 3;
    updateSlider();
}

function updateIndicators() {
    const indicators = document.querySelectorAll(".indicator");
    indicators.forEach((indicator, i) => {
        indicator.classList.remove("active");
        if (i === index) {
            indicator.classList.add("active");
        }
    });
}

function goToSlide(slideIndex) {
    index = slideIndex;
    updateSlider();
}