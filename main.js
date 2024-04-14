/*document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling
    const links = document.querySelectorAll('.navbar a');

    links.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    function smoothScroll(event) {
        event.preventDefault();
        const targetId = event.target.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);
        const offsetTop = targetElement.offsetTop;

        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }

    // Typing animation
    const typingText = document.querySelector('.text');
    if (typingText) {
        var typed = new Typed(".text", {
            strings: ["Frontend Developer", "Youtuber", "Web Developer"],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true
        });
    }

    // Form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const formData = new FormData(contactForm);
            const formObject = {};
            formData.forEach((value, key) => {
                formObject[key] = value;
            });

            // Compose email body
            const subject = encodeURIComponent('New Message from My Portfolio');
            const body = Object.keys(formObject).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(formObject[key])}`).join('&');

            // Open user's email client with pre-filled email
            window.location.href = `mailto:ekmntombela192@gmail.com?subject=${subject}&body=${body}`;
        });
    }
});*/
document.addEventListener("DOMContentLoaded", function () {
    // Typed.js initialization code
    const typed = new Typed(".text", {
        strings: ["Frontend Developer", "Youtuber", "Web Developer"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });

    // Contact form submission code
    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const message = document.getElementById("message").value;

        const emailBody = `${message}`;

        const mailtoLink = `mailto:22218153@live.mut.ac.za?subject=New%20Contact%20Message&body=${encodeURIComponent(emailBody)}`;

        window.location.href = mailtoLink;
    });
});