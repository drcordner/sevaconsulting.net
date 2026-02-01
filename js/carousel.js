/* Testimonial Carousel */
(function() {
    'use strict';

    let currentSlide = 0;
    let slides = [];
    let dots = [];
    let autoPlayInterval = null;
    const AUTO_PLAY_DELAY = 6000; // 6 seconds between slides

    function init() {
        const carousel = document.querySelector('.testimonial-carousel');
        if (!carousel) return;

        slides = carousel.querySelectorAll('.testimonial-slide');
        if (slides.length <= 1) return;

        // Create navigation dots
        const dotsContainer = document.createElement('div');
        dotsContainer.className = 'carousel-dots';

        slides.forEach((slide, index) => {
            const dot = document.createElement('button');
            dot.className = 'carousel-dot';
            dot.setAttribute('aria-label', 'Go to testimonial ' + (index + 1));
            dot.addEventListener('click', function() {
                goToSlide(index);
                resetAutoPlay();
            });
            dotsContainer.appendChild(dot);
            dots.push(dot);
        });

        carousel.appendChild(dotsContainer);

        // Set initial state
        showSlide(0);
        startAutoPlay();
    }

    function showSlide(index) {
        slides.forEach(function(slide, i) {
            slide.classList.toggle('active', i === index);
        });
        dots.forEach(function(dot, i) {
            dot.classList.toggle('active', i === index);
        });
        currentSlide = index;
    }

    function goToSlide(index) {
        showSlide(index);
    }

    function nextSlide() {
        const next = (currentSlide + 1) % slides.length;
        showSlide(next);
    }

    function startAutoPlay() {
        if (autoPlayInterval) return;
        autoPlayInterval = setInterval(nextSlide, AUTO_PLAY_DELAY);
    }

    function resetAutoPlay() {
        if (autoPlayInterval) {
            clearInterval(autoPlayInterval);
            autoPlayInterval = null;
        }
        startAutoPlay();
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
