emailjs.init("b5j_OsIqGBoyM-ILd");

const h = document.getElementById('hamburger');
const n = document.getElementById('nav-menu');

h.addEventListener('click', () => {
    h.classList.toggle('active');
    n.classList.toggle('active');
});

const l = n.querySelectorAll('a');
l.forEach(link => {
    link.addEventListener('click', () => {
        h.classList.remove('active');
        n.classList.remove('active');
    });
});

document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
        e.preventDefault();
        const t = document.querySelector(this.getAttribute('href'));
        if (t) {
            t.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const n = document.getElementById('name').value;
    const e = document.getElementById('email').value;
    const m = document.getElementById('message').value;

    emailjs.send("service_ayo001", "template_9b2urzx", {
        from_name: n,
        from_email: e,
        message: m,
    })
    .then(function(response) {
        alert('Thank you for your message! I will get back to you soon.');
        document.getElementById('contact-form').reset();
    }, function(error) {
        alert('Sorry, there was an error sending your message. Please try again later.');
        console.error('EmailJS error:', error);
    });
});
