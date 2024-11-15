let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;

function updateCarousel() {
    const carousel = document.querySelector('.carousel');
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;

    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentSlide);
    });
}

document.querySelector('.next').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
});

document.querySelector('.prev').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
});

// Auto-slide every 3 seconds
setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
}, 3000);

// Initialize the carousel position
updateCarousel();
