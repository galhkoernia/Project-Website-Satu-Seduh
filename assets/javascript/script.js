// ========================
// Smooth Scroll to Section

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Collapse Navbar on Click

const navLinks = document.querySelectorAll('.nav-link');
const navbarCollapse = document.querySelector('.navbar-collapse');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navbarCollapse.classList.contains('show')) {
            new bootstrap.Collapse(navbarCollapse).toggle();
        }
    });
});


// Fade-in Produk Saat Scroll
const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.1
});

cards.forEach(card => {
    card.classList.add('fade');
    observer.observe(card);
};

const fadeEls = document.querySelectorAll('.fade-in');
entries.forEach(entry => 
    if (entry.isIntersecting) {
        entry.target.classList.add('show');
}
});

{
    threshold: 0.1
};

fadeEls.forEach(el => {
    el.classList.add('opacity-0'); // hide dulu
    observer.observe(el);
});
