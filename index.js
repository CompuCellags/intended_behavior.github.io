/* ╔════════════════════════════════════════════════════════════════════════════╗
   ║  Módulo: index.js — Arte ASCII como interfaz visual                       ║
   ║  Versión: v6.0 — 2025-09-26 — Limpieza ética y carga modular              ║
   ╚════════════════════════════════════════════════════════════════════════════╝ */

window.addEventListener('DOMContentLoaded', () => {
  const asciiBanner = document.getElementById('ascii-banner');

  // 📦 Cargar arte ASCII desde archivo externo
  fetch('banner.txt')
    .then(response => response.text())
    .then(data => {
      asciiBanner.textContent = data;
      console.log('✅ Arte ASCII cargado correctamente.');
    })
    .catch(error => {
      console.error('⚠️ Error al cargar el banner:', error);
    });
});
