// Mobile Nav Toggle
document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('mobileToggle');
    const navLinks = document.getElementById('navLinks');
    if (toggle && navLinks) {
        toggle.addEventListener('click', function() { navLinks.classList.toggle('active'); });
        navLinks.querySelectorAll('a').forEach(function(link) {
            link.addEventListener('click', function() { navLinks.classList.remove('active'); });
        });
    }
});

// Navbar scroll
window.addEventListener('scroll', function() {
    const nav = document.getElementById('navbar');
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 50);
});

// Scroll reveal
document.addEventListener('DOMContentLoaded', function() {
    const els = document.querySelectorAll('.why-card,.step,.review-card,.blog-post,.plan-card,.value-card,.stat-card,.feature-content,.feature-visual,.story-card,.gallery-item,.benefit-item');
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    els.forEach(function(el, i) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(24px)';
        el.style.transition = 'opacity 0.5s ease ' + (i % 4) * 0.08 + 's, transform 0.5s ease ' + (i % 4) * 0.08 + 's';
        observer.observe(el);
    });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(function(a) {
    a.addEventListener('click', function(e) {
        e.preventDefault();
        var t = document.querySelector(this.getAttribute('href'));
        if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});
