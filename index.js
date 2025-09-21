/* ╔════════════════════════════════════════════════════════════════════╗
   ║  Módulo: index.js                                                 ║
   ║  Propósito: Cargar banner ASCII y diagnosticar entorno operativo  ║
   ║  Versión: v1.1 — 2025-09-20                                       ║
   ╚════════════════════════════════════════════════════════════════════╝ */

window.addEventListener('DOMContentLoaded', () => {
  fetch('banner.txt')
    .then(response => response.text())
    .then(data => {
      const asciiBanner = document.getElementById('ascii-banner');
      asciiBanner.textContent = data;

      // Recalcular dimensiones reales
      const lines = data.split('\n');
      const lineCount = lines.length;
      const columnCount = Math.max(...lines.map(line => line.length));

      const wrapper = document.querySelector('.ascii-wrapper');
      wrapper.style.height = `${lineCount * 20}px`;
      wrapper.style.width = `${columnCount * 8}px`;

      const overlay = document.querySelector('.ascii-overlay');
      overlay.style.height = `${lineCount * 20}px`;
      overlay.style.width = `${columnCount * 8}px`;

      console.log(`🧮 Arte ajustado: ${lineCount} líneas × ${columnCount} columnas`);
    })
    .catch(error => {
      console.error('⚠️ Error al cargar el banner:', error);
    });
});
