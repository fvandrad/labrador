const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    hamburger.classList.toggle('toggle');
});

// Adiciona um evento de clique a cada item do menu
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('nav-active');
        hamburger.classList.remove('toggle');
    });
});

// hero
// Lista de vídeos (IDs dos shorts)
const shorts = [
    "6uO72zt3WBk", // Primeiro vídeo
    "faXzF9AWc7c"  // Segundo vídeo
];

let currentIndex = 0; // Índice inicial

// Elementos
const iframe = document.getElementById('youtube-short');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

// Função para mudar o vídeo
function updateVideo(index) {
    iframe.src = `https://www.youtube.com/embed/${shorts[index]}?autoplay=1`;
}

// Eventos dos botões
prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateVideo(currentIndex);
    }
});

nextButton.addEventListener('click', () => {
    if (currentIndex < shorts.length - 1) {
        currentIndex++;
        updateVideo(currentIndex);
    }
});

// about
document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.about-section, .card');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(element => {
        element.style.opacity = 0;
        element.style.transform = 'translateY(20px)';
        observer.observe(element);
    });
});

// gallery
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            galleryItems.forEach(item => {
                if (filter === 'all' || item.classList.contains(filter)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Lightbox functionality can be added here
});

document.addEventListener('DOMContentLoaded', function () {
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, options);

    // Select elements to animate
    const elements = document.querySelectorAll('.about-text, .about-image, .card, .gallery-item, .testimonial-card');

    elements.forEach(element => {
        element.classList.add('animate-on-scroll');
        observer.observe(element);
    });
});
