document.addEventListener("DOMContentLoaded", function() {

    // --- Interactive Collapsible Sections ---
    const collapsibles = document.querySelectorAll(".collapsible");

    collapsibles.forEach(header => {
        header.addEventListener("click", function() {
            this.classList.toggle("active");
            const content = this.nextElementSibling;
            content.classList.toggle('hidden');
        });
    });

    // --- Scroll Fade-In Animations ---
    const fadeInElements = document.querySelectorAll('.fade-in');

    const observerOptions = {
        root: null, // observes intersections relative to the viewport
        rootMargin: '0px',
        threshold: 0.1 // trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: stop observing the element once it's visible
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeInElements.forEach(el => {
        observer.observe(el);
    });

});