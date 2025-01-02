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
