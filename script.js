// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50, // Adjusting for fixed header height
                behavior: 'smooth'
            });
        }
    });
});

// Highlight active section on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('main section');
    const scrollPosition = window.scrollY + 100; // Offset to match section top positions

    sections.forEach(section => {
        if (
            section.offsetTop <= scrollPosition &&
            section.offsetTop + section.offsetHeight > scrollPosition
        ) {
            document
                .querySelector('nav a[href="#' + section.id + '"]')
                .classList.add('active');
        } else {
            document
                .querySelector('nav a[href="#' + section.id + '"]')
                .classList.remove('active');
        }
    });
});