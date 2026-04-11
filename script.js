// Change Navigation Bar Background on Scroll
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.style.background = '#ffffff';
        navbar.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        navbar.style.height = '70px';
    } else {
        navbar.style.background = 'white';
        navbar.style.height = '80px';
    }
});

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth Scroll (Additional Protection)
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

// Simple Donation Alert
const donateButtons = document.querySelectorAll('.btn-donate-card');
donateButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        alert("Redirecting to our secure payment partner...");
    });
});