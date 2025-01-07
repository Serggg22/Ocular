import '../styles/modern-normalize.css';
import '../styles/style.css';
import '../styles/componentes/header.css';
import '../styles/componentes/hero.css';
import '../styles/componentes/footer.css';
import '../styles/componentes/movil-nav.css';
import '../styles/utils.css'; /va el ultimo/

const eye = document.getElementById('eye');
const container = document.getElementById('graphic-container');

let x = 0; 
let y = 0; 
let dx = 2; 
let dy = 2; 
const speed = 2; 

function animateEye() {
  const containerRect = container.getBoundingClientRect();
  const eyeWidth = eye.offsetWidth;
  const eyeHeight = eye.offsetHeight;

  x += dx * speed;
  y += dy * speed;

  if (x + eyeWidth >= containerRect.width || x <= 0) {
    dx *= -1;
  }

  if (y + eyeHeight >= containerRect.height || y <= 0) {
    dy *= -1; 
  }

  eye.style.transform = `translate(${x}px, ${y}px)`;

  requestAnimationFrame(animateEye);
}

animateEye();

const slides = document.querySelectorAll('.slider__img .slide');
let currentIndex = 0;

function changeSlide() {
  slides[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % slides.length;
  slides[currentIndex].classList.add('active');
}

slides[currentIndex].classList.add('active');
setInterval(changeSlide, 5000); 

import movilNav from './utils/movil-nav';

movilNav();