// AOS Animate on Scroll Init
AOS.init();

// Slideshow Background
const hero = document.querySelector('.hero');
const images = ['images/slide1.jpg'];
let current = 0;

// JavaScript for mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

