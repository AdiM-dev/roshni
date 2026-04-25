// Change Navigation Bar Background on Scroll
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        // Just shrink the height and add a deeper shadow when scrolling
        navbar.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        navbar.style.height = '70px';
        navbar.style.background = '#E9B170'; // Keeps it golden!
    } else {
        // Return to normal size at the top
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        navbar.style.height = '80px';
        navbar.style.background = '#E9B170'; // Keeps it golden!
    }
});

// UPDATED: Mobile Navigation Toggle
const menu = document.querySelector('#mobile-menu'); // Matches the ID in your HTML
const navLinks = document.querySelector('.nav-links');

if (menu) {
    menu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // This adds an animation to the hamburger bars if you added the CSS for it
        menu.classList.toggle('is-active'); 
    });
}

// Smooth Scroll & Auto-Close Mobile Menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        // Close the mobile menu when a link is clicked
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }

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

// --- Modal Gallery Logic ---

// Open the Modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
}

// Close the Modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Close the Modal if the user clicks anywhere outside of the white box
window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
});
