// ======================== PORTFOLIO DATA ========================
const portfolioData = [
    {
        title: 'Aurora Skincare',
        category: 'Commercial',
        desc: '60s Product Spot',
        image: 'https://images.unsplash.com/photo-1611339555312-e607c90052e5?w=800&q=80',
        link: 'https://instagram.com',
        large: true
    },
    {
        title: 'Midnight Echo',
        category: 'Music Video',
        desc: 'Official Release',
        image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80',
        link: 'https://instagram.com',
        large: false
    },
    {
        title: 'The Long Road',
        category: 'Documentary',
        desc: 'Travel Series',
        image: 'https://images.unsplash.com/photo-1533450337928-47a2c56e87d0?w=800&q=80',
        link: 'https://instagram.com',
        large: false
    },
    {
        title: 'Infinite Loop',
        category: 'Motion Graphics',
        desc: 'Brand Intro',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
        link: 'https://instagram.com',
        large: true
    },
    {
        title: 'Sunset Stories',
        category: 'Reels',
        desc: 'Weekly Series',
        image: 'https://images.unsplash.com/photo-1504681869696-d977e3a34a5d?w=800&q=80',
        link: 'https://instagram.com',
        large: false
    },
    {
        title: 'Tech Pulse',
        category: 'YouTube',
        desc: 'Channel Trailer',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
        link: 'https://youtube.com',
        large: false
    }
];

// ======================== INITIALIZATION ========================
document.addEventListener('DOMContentLoaded', () => {
    initPortfolio();
    initParticles();
    initScrollAnimations();
    initMagneticButtons();
    initNavigation();
    initCounters();
    animateRevealElements();
    removeLoadingScreen();
});

// ======================== LOADING SCREEN ========================
function removeLoadingScreen() {
    setTimeout(() => {
        const loadingScreen = document.getElementById('loadingScreen');
        if (loadingScreen) {
            loadingScreen.style.opacity = '0';
            loadingScreen.style.pointerEvents = 'none';
            setTimeout(() => loadingScreen.remove(), 600);
        }
    }, 2400);
}

// ======================== PORTFOLIO GRID ========================
function initPortfolio() {
    const portfolioGrid = document.getElementById('portfolioGrid');
    
    portfolioData.forEach((item, index) => {
        const portfolioItem = document.createElement('a');
        portfolioItem.href = item.link;
        portfolioItem.target = '_blank';
        portfolioItem.className = `portfolio-item ${item.large ? 'large' : ''}`;
        portfolioItem.setAttribute('data-reveal', '');
        portfolioItem.style.animationDelay = `${index * 100}ms`;
        
        portfolioItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}" class="portfolio-image" loading="lazy">
            <div class="portfolio-overlay">
                <div class="portfolio-play">▶</div>
            </div>
            <div class="portfolio-info">
                <div class="portfolio-category">${item.category}</div>
                <h3 class="portfolio-title">${item.title}</h3>
                <p class="portfolio-desc">${item.desc}</p>
            </div>
        `;
        
        portfolioGrid.appendChild(portfolioItem);
    });
}

// ======================== PARTICLES BACKGROUND ========================
function initParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = window.innerWidth > 768 ? 50 : 20;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.opacity = Math.random() * 0.5 + 0.2;
        particle.style.animation = `float ${3 + Math.random() * 7}s linear infinite`;
        particle.style.animationDelay = Math.random() * 5 + 's';
        particlesContainer.appendChild(particle);
    }
}

// ======================== SCROLL ANIMATIONS ========================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = `reveal 0.8s ease forwards`;
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('[data-reveal]').forEach(el => {
        observer.observe(el);
    });
}

// ======================== TEXT REVEAL ANIMATIONS ========================
function animateRevealElements() {
    const heroText = document.querySelector('.hero-text');
    if (heroText) {
        heroText.style.opacity = '1';
        heroText.style.animation = 'none';
    }
    
    const heroCta = document.querySelector('.hero-cta');
    if (heroCta) {
        heroCta.style.opacity = '1';
        heroCta.style.animation = 'none';
    }
}

// ======================== MAGNETIC BUTTONS ========================
function initMagneticButtons() {
    const magneticButtons = document.querySelectorAll('.magnetic');
    
    magneticButtons.forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            button.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translate(0, 0)';
        });
    });
}

// ======================== NAVIGATION ========================
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-menu a');
    const navCta = document.querySelector('.nav-cta');
    
    // Scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Active link tracking
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
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
    
    // Smooth scroll
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const target = document.querySelector(targetId);
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // CTA button
    if (navCta) {
        navCta.addEventListener('click', () => {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                window.scrollTo({
                    top: contactSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    }
    
    // Portfolio button
    const viewPortfolioBtn = document.querySelector('.btn-primary');
    if (viewPortfolioBtn) {
        viewPortfolioBtn.addEventListener('click', () => {
            const portfolioSection = document.getElementById('portfolio');
            if (portfolioSection) {
                window.scrollTo({
                    top: portfolioSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    }
}

// ======================== ANIMATED COUNTERS ========================
function initCounters() {
    const counterElements = document.querySelectorAll('[data-target]');
    
    const observerOptions = {
        threshold: 0.5,
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                const target = parseInt(entry.target.getAttribute('data-target'));
                animateCounter(entry.target, target);
                entry.target.classList.add('counted');
            }
        });
    }, observerOptions);
    
    counterElements.forEach(el => observer.observe(el));
}

function animateCounter(element, target) {
    const duration = 2000;
    const increment = target / (duration / 50);
    let current = 0;
    
    const counter = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target.toLocaleString();
            clearInterval(counter);
        } else {
            element.textContent = Math.floor(current).toLocaleString();
        }
    }, 50);
}

// ======================== TESTIMONIALS AUTO-SCROLL ========================
window.addEventListener('load', () => {
    const testimonialsTrack = document.getElementById('testimonialsTrack');
    if (testimonialsTrack) {
        const testimonialCards = document.querySelectorAll('.testimonial-card');
        const cardWidth = testimonialCards[0].offsetWidth + 24; // Include gap
        let scrollPosition = 0;
        
        setInterval(() => {
            scrollPosition += 2;
            if (scrollPosition > cardWidth * (testimonialCards.length / 2)) {
                scrollPosition = 0;
            }
            testimonialsTrack.style.transform = `translateX(-${scrollPosition}px)`;
        }, 50);
    }
});

// ======================== SCROLL SMOOTHNESS ========================
function customScroll() {
    const scrollElements = document.querySelectorAll('[data-scroll]');
    
    window.addEventListener('scroll', () => {
        scrollElements.forEach(el => {
            const scrollPosition = window.scrollY;
            el.style.transform = `translateY(${scrollPosition * 0.5}px)`;
        });
    });
}

// ======================== GRADIENT ANIMATION ========================
function animateGradients() {
    const gradientElements = document.querySelectorAll('[data-gradient]');
    
    gradientElements.forEach((el, index) => {
        let angle = 0;
        setInterval(() => {
            angle += 1;
            el.style.backgroundPosition = `${angle}% 0`;
        }, 50);
    });
}

// ======================== CONTACT CARD INTERACTIONS ========================
document.querySelectorAll('.contact-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.setProperty('--scale', '1.05');
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.setProperty('--scale', '1');
    });
});

// ======================== KEYBOARD NAVIGATION ========================
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close any modals if needed
    }
    
    // Quick navigation
    if (e.ctrlKey || e.metaKey) {
        if (e.key === 'k') {
            e.preventDefault();
            // Could open search or navigation
        }
    }
});

// ======================== PERFORMANCE OPTIMIZATION ========================
// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// ======================== ACCESSIBILITY ========================
// Ensure proper focus management
document.addEventListener('click', (e) => {
    if (e.target.matches('.btn, a, button')) {
        e.target.blur();
    }
});

// Keyboard accessibility for buttons
document.querySelectorAll('.btn, .contact-card, .service-card').forEach(el => {
    el.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            el.click();
        }
    });
});

// ======================== THEME DETECTION ========================
function detectThemePreference() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark-theme');
    }
}

detectThemePreference();

// ======================== WINDOW RESIZE HANDLER ========================
window.addEventListener('resize', () => {
    // Reinitialize particles on resize
    if (window.innerWidth < 768) {
        const particles = document.querySelectorAll('.particle');
        if (particles.length > 30) {
            particles.forEach((p, i) => {
                if (i > 20) p.remove();
            });
        }
    }
});

// ======================== SMOOTH SCROLL POLYFILL ========================
function smoothScrollPolyfill() {
    if (!('scrollBehavior' in document.documentElement.style)) {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    }
}

smoothScrollPolyfill();

// ======================== INTERSECTION OBSERVER FOR PARALLAX ========================
function initParallaxEffect() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    
    window.addEventListener('scroll', () => {
        parallaxElements.forEach(el => {
            const scrollPosition = window.scrollY;
            const elementPosition = el.offsetTop;
            const distance = scrollPosition - elementPosition;
            
            if (distance > -window.innerHeight && distance < window.innerHeight) {
                el.style.transform = `translateY(${distance * 0.5}px)`;
            }
        });
    });
}

initParallaxEffect();

console.log('Portfolio website initialized successfully!');
