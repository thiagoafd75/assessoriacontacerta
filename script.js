// Scroll-triggered animations using Intersection Observer
document.addEventListener('DOMContentLoaded', function() {
    // Initialize animations
    initScrollAnimations();
    initFormHandling();
    initSmoothScrolling();
});

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll('.pain-card, .solution-card, .benefit-item, .stat-item, .fade-in, .slide-up');
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// Form handling
function initFormHandling() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(this);
            const formObject = {};
            formData.forEach((value, key) => {
                formObject[key] = value;
            });

            // Basic validation
            if (!validateForm(formObject)) {
                return;
            }

            // Simulate form submission (in a real app, this would send to a server)
            showSuccessMessage();

            // Reset form
            this.reset();
        });
    }
}

// Form validation
function validateForm(data) {
    const requiredFields = ['name', 'email', 'phone'];

    for (const field of requiredFields) {
        if (!data[field] || data[field].trim() === '') {
            showErrorMessage(`Por favor, preencha o campo ${getFieldLabel(field)}.`);
            return false;
        }
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        showErrorMessage('Por favor, insira um e-mail válido.');
        return false;
    }

    // Phone validation (basic)
    const phoneRegex = /^\(\d{2}\)\s\d{4,5}-\d{4}$|^\d{10,11}$/;
    if (!phoneRegex.test(data.phone.replace(/\s/g, ''))) {
        showErrorMessage('Por favor, insira um telefone válido.');
        return false;
    }

    return true;
}

function getFieldLabel(field) {
    const labels = {
        name: 'Nome Completo',
        email: 'E-mail',
        phone: 'Telefone'
    };
    return labels[field] || field;
}

// Success and error messages
function showSuccessMessage() {
    const form = document.getElementById('contactForm');
    const existingMessage = form.querySelector('.form-message');

    if (existingMessage) {
        existingMessage.remove();
    }

    const successDiv = document.createElement('div');
    successDiv.className = 'form-message success';
    successDiv.innerHTML = `
        <div style="background: #d4edda; color: #155724; padding: 15px; border-radius: 8px; margin-bottom: 20px; border: 1px solid #c3e6cb;">
            ✅ Mensagem enviada com sucesso! Entraremos em contato em até 24 horas.
        </div>
    `;

    form.insertBefore(successDiv, form.firstChild);

    // Remove message after 5 seconds
    setTimeout(() => {
        successDiv.remove();
    }, 5000);
}

function showErrorMessage(message) {
    const form = document.getElementById('contactForm');
    const existingMessage = form.querySelector('.form-message');

    if (existingMessage) {
        existingMessage.remove();
    }

    const errorDiv = document.createElement('div');
    errorDiv.className = 'form-message error';
    errorDiv.innerHTML = `
        <div style="background: #f8d7da; color: #721c24; padding: 15px; border-radius: 8px; margin-bottom: 20px; border: 1px solid #f5c6cb;">
            ❌ ${message}
        </div>
    `;

    form.insertBefore(errorDiv, form.firstChild);

    // Remove message after 5 seconds
    setTimeout(() => {
        errorDiv.remove();
    }, 5000);
}

// Smooth scrolling for navigation
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll to form function (used in buttons)
function scrollToForm() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = contactSection.offsetTop - headerHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const scrollY = window.scrollY;

    if (scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(11, 34, 51, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = 'none';
    }
});

// Phone number formatting
document.addEventListener('DOMContentLoaded', function() {
    const phoneInput = document.getElementById('phone');

    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');

            if (value.length <= 11) {
                if (value.length <= 2) {
                    value = value;
                } else if (value.length <= 6) {
                    value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
                } else if (value.length <= 10) {
                    value = `(${value.slice(0, 2)}) ${value.slice(2, 6)}-${value.slice(6)}`;
                } else {
                    value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
                }
            }

            e.target.value = value;
        });
    }
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounced scroll handler
window.addEventListener('scroll', debounce(function() {
    // Additional scroll-based features can be added here
}, 16)); // ~60fps