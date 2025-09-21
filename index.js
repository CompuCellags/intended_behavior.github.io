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
      console.log('🖼️ Banner cargado correctamente.');

      // Ajuste dinámico del contenedor según arte cargado
      const lineCount = data.split('\n').length;
      const columnCount = Math.max(...data.split('\n').map(line => line.length));

      const wrapper = document.querySelector('.ascii-wrapper');
      wrapper.style.height = `${lineCount * 20}px`;
      wrapper.style.width = `${columnCount * 8}px`;

      const overlay = document.querySelector('.ascii-overlay');
      overlay.style.height = `${lineCount * 20}px`;
      overlay.style.width = `${columnCount * 8}px`;

      // Diagnóstico ético por entorno
      if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') {
        console.log('📂 Per angusta ad augusta — entorno local reproducible.');
      } else {
        console.log('🌐 Modo remoto — privilegios limitados.');
      }
    })
    .catch(error => {
      console.error('⚠️ Error al cargar el banner:', error);
    });
});
