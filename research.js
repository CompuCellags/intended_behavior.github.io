// === research.js ===
// Comportamiento ético para el módulo de investigación

document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('#research-portfolio li');

  // Registro de lectura de hallazgos
  items.forEach(item => {
    item.addEventListener('click', () => {
      console.log(`[TRACE] Hallazgo consultado: ${item.textContent}`);
      item.style.backgroundColor = '#f5e6d3';
    });
  });

  // Activación de privilegio narrativo (simulado)
  const section = document.getElementById('research-portfolio');
  section.addEventListener('mouseenter', () => {
    section.style.borderLeftColor = '#a67c52';
    console.log('[PRIVILEGE] Activado: acceso narrativo ético');
  });

  section.addEventListener('mouseleave', () => {
    section.style.borderLeftColor = '#a67c52';
  });
});
