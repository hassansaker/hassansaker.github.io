// 1. Scroll to Top Button
const scrollToTopButton = document.createElement('button');
scrollToTopButton.textContent = '↑';
scrollToTopButton.classList.add('scroll-to-top');
document.body.appendChild(scrollToTopButton);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// 2. Smooth Scroll for Navigation Links
const navLinks = document.querySelectorAll('header nav a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({ top: targetElement.offsetTop - 80, behavior: 'smooth' });
    });
});

// 3. Image Hover Effect for Portfolio Items
const portfolioItems = document.querySelectorAll('.portfolio-item');

portfolioItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        const img = item.querySelector('img');
        img.style.transform = 'scale(1.1)';
        img.style.transition = 'transform 0.3s ease-in-out';
    });

    item.addEventListener('mouseleave', () => {
        const img = item.querySelector('img');
        img.style.transform = 'scale(1)';
    });
});
