$(document).ready(function () {
    $("#hero-slider").owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        navText: ["<span class='nav-btn '><i class='fa-solid fa-arrow-left'></i></span>",
             "<span class='nav-btn'><i class='fa-solid fa-arrow-right'></i></span>"],
        items: 1,
        dots: false,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        responsive: {
            0: { nav: false, },
            768: { nav: true, },
            1000: { items: 1 }
        }
    });

       $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: true,
        items: 1,
        smartSpeed: 800,
    })
});

// Initialize AOS animation
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
});


// Login Form
// Login Form
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Basic validation
    if (!email || !password) {
        alert('Please fill in all fields');
        return;
    }

    // This is the key change:
    // Redirect to the new page after successful validation.
    window.location.href = 'lovoon.html';

    // In a real application, you would perform an AJAX request here
    // to your server to verify the credentials before redirecting.
    // The code below this line won't execute after the redirect.
    
});

// Register Form
document.getElementById('registerForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const agreeTerms = document.getElementById('agreeTerms').checked;

    // Validation
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
        alert('Please fill in all fields');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    if (!agreeTerms) {
        alert('You must agree to the terms and conditions');
        return;
    }

    // In a real app, you would send this data to your backend
    alert(`Registration successful! Welcome ${firstName} ${lastName}.`);

    // **This is the key change:**
    // If validation passes, redirect to basicinfo.html
    window.location.href = 'basicinfo.html';

    // The code below this will not be reached after the redirect
    // unless the redirect is prevented for some reason.
    // However, you can still have it to clear the form and close the modal.
    const modal = bootstrap.Modal.getInstance(document.getElementById('registerModal'));
    modal.hide();
    this.reset();
});


//===========================================================================

//here

//======================================================================


 function closeAllModals() {
        const modals = document.querySelectorAll('#forgotPasswordModal');
        modals.forEach(modal => {
            modal.style.display = 'none';
        });
        document.body.style.overflow = 'auto';
    };
    
    document.querySelectorAll('.close-modal').forEach(btn => {
            btn.addEventListener('click', closeAllModals);
        });



//===========================================================================

//up here

//======================================================================




// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    loadTemplates();
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});