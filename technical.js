// === technical.js ===
// Comportamiento ético para el módulo técnico

document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('a');

  // Registro de clics en artefactos técnicos
  links.forEach(link => {
    link.addEventListener('click', () => {
      console.log(`[TRACE] Acceso a artefacto técnico: ${link.textContent}`);
    });
  });

  // Activación de privilegio técnico (simulado)
  const section = document.getElementById('technical-portfolio');
  section.addEventListener('mouseenter', () => {
    section.style.borderLeftColor = '#0077cc';
    console.log('[PRIVILEGE] Activado: acceso técnico institucional');
  });

  section.addEventListener('mouseleave', () => {
    section.style.borderLeftColor = '#555';
  });
});
