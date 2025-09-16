/* ╔════════════════════════════════════════════════════════════════════╗
   ║  Módulo: index.js                                                 ║
   ║  Propósito: Cargar banner ASCII y diagnosticar entorno operativo  ║
   ║  Versión: v1.0 — 2025-09-15                                       ║
   ╚════════════════════════════════════════════════════════════════════╝ */

window.addEventListener('DOMContentLoaded', () => {
  fetch('banner.txt')
    .then(response => response.text())
    .then(data => {
      document.getElementById('ascii-banner').textContent = data;
      console.log('🖼️ Banner cargado correctamente.');

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
