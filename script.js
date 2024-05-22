
// Función para alternar el menú de navegación en dispositivos móviles
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('show');
});

// Función para mostrar animación de desplazamiento suave al hacer clic en los enlaces de navegación
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'
      });
    }

    // Cerrar el menú de navegación en dispositivos móviles después de hacer clic en un enlace
    if (window.innerWidth < 768) {
      menu.classList.remove('show');
    }
  });
});

// Función para mostrar una alerta cuando se envíe el formulario de contacto
const contactForm = document.querySelector('#contacto form');

contactForm.addEventListener('submit', e => {
  e.preventDefault();
  alert('¡Gracias por contactarme! Me pondré en contacto contigo pronto.');
  contactForm.reset();
});

// Función para mostrar una animación de desplazamiento al cargar la página
window.addEventListener('load', () => {
  const heroSection = document.querySelector('#inicio');
  window.scrollTo({
    top: heroSection.offsetTop,
    behavior: 'smooth'
  });
});
=======
// Función para suavizar el desplazamiento a los enlaces del menú
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
>>>>>>> 6389584962e871fc44305cd0baf040dd118150ac
