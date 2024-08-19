let currentIndex = 0;
const testimonialBoxes = document.querySelectorAll('.testimonial-box');

function updateCarousel() {
    const testimonialCarousel = document.querySelector('.testimonial-carousel');
    testimonialCarousel.style.transform = `translateX(-${currentIndex * 100}%)`; 
}

function moveLeft() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : testimonialBoxes.length - 1;
    updateCarousel();
}

function moveRight() {
    currentIndex = (currentIndex < testimonialBoxes.length - 1) ? currentIndex + 1 : 0;
    updateCarousel();
}

// Auto-scroll every 5 seconds
setInterval(moveRight, 5000);

// Initial positioning
updateCarousel();
