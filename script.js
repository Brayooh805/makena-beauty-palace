// ============ MOBILE MENU ============
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

// Close mobile menu when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

// ============ SCROLL REVEAL ============
const revealElements = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealElements.forEach(el => observer.observe(el));

// ============ CURRENT YEAR ============
document.getElementById('year').textContent = new Date().getFullYear();

// ============ HEADER SHADOW ON SCROLL ============
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 30) {
    header.style.boxShadow = '0 6px 24px