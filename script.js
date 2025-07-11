// Loading Screen
window.addEventListener('load', () => {
    const loadingScreen = document.querySelector('.loading-screen');
    setTimeout(() => loadingScreen.classList.add('hide'), 1000);
});

// Custom Cursor
const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    follower.style.left = e.clientX + 'px';
    follower.style.top = e.clientY + 'px';
});

document.addEventListener('mousedown', () => {
    cursor.style.transform = 'scale(0.8)';
    follower.style.transform = 'scale(1.2)';
});

document.addEventListener('mouseup', () => {
    cursor.style.transform = 'scale(1)';
    follower.style.transform = 'scale(1)';
});

// Scroll Progress
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    document.querySelector('.scroll-progress').style.width = scrollPercent + '%';
});

// Scroll Animations
const animateElements = document.querySelectorAll('.animate-on-scroll');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

animateElements.forEach(element => observer.observe(element));

// Particle Effect
function createParticle() {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = Math.random() * window.innerWidth + 'px';
    particle.style.top = Math.random() * window.innerHeight + 'px';
    particle.style.animationDelay = Math.random() * 3 + 's';
    document.body.appendChild(particle);
    setTimeout(() => particle.remove(), 3000);
}

setInterval(createParticle, 200);

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Form Submission with Feedback
const form = document.getElementById('contact-form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        const submitBtn = document.querySelector('.submit-btn');

        // Simulação de envio
        submitBtn.disabled = true;
        submitBtn.textContent = 'Enviando...';
        setTimeout(() => {
            console.log('Formulário enviado:', { name, email, message });
            alert('Mensagem enviada com sucesso! Entrarei em contato em breve.');
            form.reset();
            submitBtn.disabled = false;
            submitBtn.textContent = 'Enviar Mensagem';
        }, 1500);
    });
}