const slides = document.getElementsByClassName("carousel-item");
const totalSlides = slides.length;
let slidePosition = 0;

document.getElementById("carousel-button-next").addEventListener("click", moveToNextSlide);
document.getElementById("carousel-button-prev").addEventListener("click", moveToPrevSlide);

function hideAllSlides() {
    for (let element of slides) {
        element.classList.remove("carousel-item-visible")
        element.classList.add("carousel-item-hidden")
    }
}

function moveToNextSlide() {
    hideAllSlides();
    
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0
    } else {
        slidePosition += 1
    }
    
    slides[slidePosition].classList.add("carousel-item-visible");
}

function moveToPrevSlide() {
    hideAllSlides();
    
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }
    
    slides[slidePosition].classList.add("carousel-item-visible");
}

