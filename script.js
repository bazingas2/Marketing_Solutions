/**
 * MARKETING SOLUTIONS - Core JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Update current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // 2. Navbar Sticky Effect on Scroll
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 3. Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const closeMenuBtn = document.querySelector('.close-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
    const mobileLinks = document.querySelectorAll('.mobile-nav-links a');

    function toggleMenu() {
        mobileMenu.classList.toggle('active');
        mobileMenuOverlay.classList.toggle('active');
        // Prevent body scroll when menu is open
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    }

    mobileMenuBtn.addEventListener('click', toggleMenu);
    closeMenuBtn.addEventListener('click', toggleMenu);
    mobileMenuOverlay.addEventListener('click', toggleMenu);

    mobileLinks.forEach(link => {
        link.addEventListener('click', toggleMenu);
    });

    // 4. Smooth Scrolling for Anchor Links (polyfill/enhancement)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                // Offset for fixed header
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 5. Intersection Observer for Scroll Animations (Fade-in-up)
    const fadeElements = document.querySelectorAll('.fade-in-up');
    
    const appearOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            
            // Add slight delay if specified in dataset
            const delay = entry.target.getAttribute('data-delay');
            if (delay) {
                entry.target.style.transitionDelay = `${delay}s`;
            }

            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        });
    }, appearOptions);

    fadeElements.forEach(element => {
        appearOnScroll.observe(element);
    });

    // 6. Optional: Number Counter Animation for Stats (if in viewport)
    const statsSection = document.querySelector('.hero-stats');
    let counted = false;

    // A simpler way: just trigger when user scrolls down
    // Since stats are on the hero, they are usually loaded immediately
    // If they were lower, we would use Intersection Observer
});
