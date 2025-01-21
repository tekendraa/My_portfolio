// Theme switcher
const themeSwitch = document.querySelector('.theme-switch');
const root = document.documentElement;
let isDark = true;

themeSwitch.addEventListener('click', () => {
    isDark = !isDark;
    if (isDark) {
        root.style.setProperty('--primary-color', '#241731');
        root.style.setProperty('--text-color', '#ffffff');
        themeSwitch.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        root.style.setProperty('--primary-color', '#ffffff');
        root.style.setProperty('--text-color', '#241731');
        themeSwitch.innerHTML = '<i class="fas fa-sun"></i>';
    }
});

// Navigation active state
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Contact form handling
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const formProps = Object.fromEntries(formData);
    
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formProps);
    
    // Show success message
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
});
