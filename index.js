/* ╔════════════════════════════════════════════════════════════════════════════╗
   ║  Módulo: index.js                                                         ║
   ║  Propósito: Cargar arte ASCII y calibrar overlay ético invisible          ║
   ║  Versión: v2.0 — 2025-09-22                                               ║
   ║  Correcciones: Medición real de fuente, trazabilidad visual, validación  ║
   ╚════════════════════════════════════════════════════════════════════════════╝ */

window.addEventListener('DOMContentLoaded', () => {
  const asciiBanner = document.getElementById('ascii-banner');
  const wrapper = document.querySelector('.ascii-wrapper');
  const overlay = document.querySelector('.ascii-overlay');

  // 🧪 Medición real del ancho de carácter
  function getCharWidth() {
    const span = document.createElement('span');
    span.textContent = 'M';
    span.style.fontFamily = 'JetBrains Mono, monospace';
    span.style.fontSize = '16px';
    span.style.visibility = 'hidden';
    document.body.appendChild(span);
    const width = span.getBoundingClientRect().width;
    document.body.removeChild(span);
    return width;
  }

  // 🧪 Medición real de altura de línea
  function getLineHeight() {
    const span = document.createElement('span');
    span.textContent = 'M';
    span.style.fontFamily = 'JetBrains Mono, monospace';
    span.style.fontSize = '16px';
    span.style.lineHeight = 'normal';
    span.style.visibility = 'hidden';
    document.body.appendChild(span);
    const height = span.getBoundingClientRect().height;
    document.body.removeChild(span);
    return height;
  }

  // 🧠 Cargar arte ASCII y ajustar dimensiones
  fetch('banner.txt')
    .then(response => response.text())
    .then(data => {
      asciiBanner.textContent = data;

      const lines = data.split('\n');
      const lineCount = lines.length;
      const columnCount = Math.max(...lines.map(line => line.length));

      const charWidth = getCharWidth();
      const lineHeight = getLineHeight();

      const totalWidth = columnCount * charWidth;
      const totalHeight = lineCount * lineHeight;

      wrapper.style.width = `${totalWidth}px`;
      wrapper.style.height = `${totalHeight}px`;
      overlay.style.width = `${totalWidth}px`;
      overlay.style.height = `${totalHeight}px`;

      console.log(`✅ Arte calibrado: ${lineCount} líneas × ${columnCount} columnas`);
      console.log(`📐 Dimensiones reales: ${totalWidth}px × ${totalHeight}px`);
    })
    .catch(error => {
      console.error('⚠️ Error al cargar el banner:', error);
    });
});

