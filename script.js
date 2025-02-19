document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;

    document.querySelector(".next").addEventListener("click", function () {
        slides[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % totalSlides;
        slides[currentIndex].classList.add("active");
        updateCarousel();
    });

    document.querySelector(".prev").addEventListener("click", function () {
        slides[currentIndex].classList.remove("active");
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        slides[currentIndex].classList.add("active");
        updateCarousel();
    });

    function updateCarousel() {
        document.querySelector(".carousel-container").style.transform = 
            `translateX(-${currentIndex * 100}%)`;
    }
});
