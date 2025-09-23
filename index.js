/* ╔════════════════════════════════════════════════════════════════════════════╗
   ║  Módulo: index.js                                                          ║
   ║  Propósito: Cargar arte ASCII y calibrar dinámicamente el overlay          ║
   ║  Versión: v3.0 — 2025-09-22 — Posicionamiento dinámico de botones          ║
   ╚════════════════════════════════════════════════════════════════════════════╝ */

window.addEventListener('DOMContentLoaded', () => {
  const asciiBanner = document.getElementById('ascii-banner');
  const wrapper = document.querySelector('.ascii-wrapper');
  const overlay = document.querySelector('.ascii-overlay');

  // Asegurarse de que el banner es visible para medirlo correctamente
  asciiBanner.style.visibility = 'hidden';

  // Medición real del ancho de carácter
  function getCharWidth() {
    const span = document.createElement('span');
    span.textContent = 'M'; // Carácter de referencia
    span.style.fontFamily = getComputedStyle(asciiBanner).fontFamily;
    span.style.fontSize = getComputedStyle(asciiBanner).fontSize;
    span.style.visibility = 'hidden';
    span.style.position = 'absolute';
    document.body.appendChild(span);
    const width = span.getBoundingClientRect().width;
    document.body.removeChild(span);
    return width;
  }

  // Medición real de altura de línea
  function getLineHeight() {
    // Para 'white-space: pre', la altura de línea es simplemente la altura del contenedor
    // del texto dividida por el número de líneas.
    const lines = asciiBanner.textContent.split('\n');
    const lineCount = lines.length > 1 ? lines.length : 1;
    const bannerHeight = asciiBanner.getBoundingClientRect().height;
    return bannerHeight / lineCount;
  }

  // Cargar arte ASCII y ajustar dimensiones
  fetch('banner.txt')
    .then(response => response.text())
    .then(data => {
      asciiBanner.textContent = data;
      asciiBanner.style.visibility = 'visible'; // Hacer visible después de cargar

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
      console.log(`📐 Dimensiones (px): ${totalWidth.toFixed(2)} W × ${totalHeight.toFixed(2)} H`);
      console.log(`📏 Medidas por carácter (px): ${charWidth.toFixed(2)} W × ${lineHeight.toFixed(2)} H`);

      // --- Posicionamiento Dinámico de Botones ---
      
      const columnStart = 151;
      const buttonWidthChars = 22;

      const positionLink = (selector, topRow, leftCol) => {
        const element = document.querySelector(selector);
        if (element) {
          element.style.top = `${topRow * lineHeight}px`;
          element.style.left = `${(leftCol * charWidth) + 3.5}px`;
          element.style.width = `${buttonWidthChars * charWidth}px`;
          element.style.height = `${lineHeight}px`;
        }
      };

      // TECHNICAL PORTFOLIO
      positionLink('.tech-1', 2, columnStart);
      positionLink('.tech-2', 3, columnStart);
      positionLink('.tech-3', 4, columnStart);

      // RESEARCH PORTFOLIO
      positionLink('.research-1', 6, columnStart);
      positionLink('.research-2', 7, columnStart);
      positionLink('.research-3', 8, columnStart);

      // SKILLS & METHODOLOGY
      positionLink('.skills-1', 10, columnStart);
      positionLink('.skills-2', 11, columnStart);
      positionLink('.skills-3', 12, columnStart);
      
      // ASCII ART
      positionLink('.ascii-1', 14, columnStart);
      positionLink('.ascii-2', 15, columnStart);
      positionLink('.ascii-3', 16, columnStart);

      // CONTACT
      positionLink('.contact-1', 18, columnStart);
      positionLink('.contact-2', 19, columnStart);
      positionLink('.contact-3', 20, columnStart);

      console.log('✅ Botones invisibles posicionados dinámicamente.');

    })
    .catch(error => {
      console.error('⚠️ Error al cargar el banner:', error);
      asciiBanner.style.visibility = 'visible'; // Asegurarse de que sea visible incluso si hay error
    });
});
