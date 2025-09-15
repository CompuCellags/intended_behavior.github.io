/* ╔════════════════════════════════════════════════════════╗
   ║  Módulo: index.js                                      ║
   ║  Propósito: Cargar arte ASCII y activar privilegios    ║
   ║  Versión: v1.0 — 2025-09-15                            ║
   ╚════════════════════════════════════════════════════════╝ */

const banner = document.getElementById('ascii-banner');

if (banner) {
  fetch('banner.txt')
    .then(res => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.text();
    })
    .then(data => {
      banner.textContent = data;
      console.log('🖼️ Banner cargado correctamente.');
    })
    .catch(err => {
      console.warn('⚠️ Error al cargar el banner:', err.message);
    });
} else {
  console.warn('⚠️ Contenedor #ascii-banner no encontrado.');
}

// Diagnóstico ético por entorno
console.log('🔐 Entrada ética activada — privilegios segmentados por propósito.');

if (location.protocol === 'file:') {
  console.log('📂 Per angusta ad augusta — entorno local reproducible.');
} else {
  console.warn('🌐 Modo remoto — privilegios limitados.');
}
