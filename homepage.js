// Carousel functionality
let currentIndex = 0;

function moveLeft() {
    const testimonials = document.querySelectorAll('.testimonial-box');
    const totalTestimonials = testimonials.length;

    // Hide the current testimonial
    testimonials[currentIndex].style.display = 'none';

    // Move to the previous testimonial
    currentIndex = (currentIndex - 1 + totalTestimonials) % totalTestimonials;

    // Show the new current testimonial
    testimonials[currentIndex].style.display = 'block';
}

function moveRight() {
    const testimonials = document.querySelectorAll('.testimonial-box');
    const totalTestimonials = testimonials.length;

    // Hide the current testimonial
    testimonials[currentIndex].style.display = 'none';

    // Move to the next testimonial
    currentIndex = (currentIndex + 1) % totalTestimonials;

    // Show the new current testimonial
    testimonials[currentIndex].style.display = 'block';
}

// Text-to-Speech functionality
function speakText(elementId) {
    const text = document.getElementById(elementId).innerText;
    console.log(`Text to be spoken: ${text}`); // Debugging line
    const speech = new SpeechSynthesisUtterance(text);

    // Set speech properties (optional)
    speech.pitch = 1;  // Adjust pitch (0-2)
    speech.rate = 1;   // Adjust rate of speech (0.1-10)
    speech.volume = 1; // Volume (0-1)

    // Speak the text
    window.speechSynthesis.speak(speech);
}

// Ensure that the first testimonial is displayed initially
document.addEventListener('DOMContentLoaded', () => {
    const testimonials = document.querySelectorAll('.testimonial-box');
    testimonials.forEach((testimonial, index) => {
        testimonial.style.display = index === 0 ? 'block' : 'none';
    });
});
