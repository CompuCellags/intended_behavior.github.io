/* ╔════════════════════════════════════════════════════════════════════════════╗
   ║  Módulo: index.js — Arte ASCII interactivo como botón                     ║
   ║  Versión: v5.0 — 2025-09-26 — Zonas clicables sobre caracteres            ║
   ╚════════════════════════════════════════════════════════════════════════════╝ */

window.addEventListener('DOMContentLoaded', () => {
  const asciiBanner = document.getElementById('ascii-banner');

  function getCharWidth(element) {
    const span = document.createElement('span');
    span.textContent = 'M';
    span.style.fontFamily = getComputedStyle(element).fontFamily;
    span.style.fontSize = getComputedStyle(element).fontSize;
    span.style.visibility = 'hidden';
    span.style.position = 'absolute';
    document.body.appendChild(span);
    const width = span.getBoundingClientRect().width;
    document.body.removeChild(span);
    return width;
  }

  fetch('banner.txt')
    .then(response => response.text())
    .then(data => {
      asciiBanner.textContent = data;

      setTimeout(() => {
        const computedStyle = getComputedStyle(asciiBanner);
        const lineHeight = parseFloat(computedStyle.lineHeight);
        const charWidth = getCharWidth(asciiBanner);
        const pixelAdjustment = 2.5;

        console.log(`✅ Arte cargado. Medidas: ${charWidth.toFixed(2)}px × ${lineHeight.toFixed(2)}px`);

        const positionZone = (selector, topRow, leftCol, widthChars = 22, heightLines = 1) => {
          const element = document.querySelector(selector);
          if (element) {
            element.style.top = `${topRow * lineHeight}px`;
            element.style.left = `${(leftCol * charWidth) + pixelAdjustment}px`;
            element.style.width = `${widthChars * charWidth}px`;
            element.style.height = `${heightLines * lineHeight}px`;
          }
        };

        // Zonas activas sobre arte ASCII
        positionZone('.tech-1', 2, 151);
        positionZone('.research-1', 6, 151);
        positionZone('.skills-1', 10, 151);
        positionZone('.ascii-1', 14, 151);
        positionZone('.contact-1', 18, 151);

        console.log('✅ Zonas clicables posicionadas.');
      }, 0);
    })
    .catch(error => {
      console.error('⚠️ Error al cargar el banner:', error);
    });
});
