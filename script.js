// script.js

// Smooth Scrolling
const smoothScroll = (target) => {
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
    });
};

// Event listener for links
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = link.getAttribute('href');
        smoothScroll(target);
    });
});

// Animations on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate');
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            el.classList.add('animated');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);

// Interactivity
const interactivity = () => {
    const button = document.querySelector('.interact-button');
    button.addEventListener('click', () => {
        alert('Button clicked! Enjoy scrolling!');
    });
};

interactivity();