// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animate elements on scroll
window.addEventListener('scroll', function() {
    const cards = document.querySelectorAll('.project-card, .skill-category, .timeline-item');
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const cardVisible = 150; // Distance from the bottom of the viewport to trigger animation
        
        if (cardTop < window.innerHeight - cardVisible) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
});

// Initialize elements for scroll animation
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.project-card, .skill-category, .timeline-item');
    cards.forEach(card => {
        // Set initial state to be invisible and slightly moved down
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
    });
});