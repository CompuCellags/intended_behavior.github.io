/* ╔════════════════════════════════════════════════════════════════════════════╗
   ║  Módulo: index.js                                                          ║
   ║  Versión: v4.1 — 2025-09-25 — Versión corregida y funcional                ║
   ╚════════════════════════════════════════════════════════════════════════════╝ */

window.addEventListener('DOMContentLoaded', () => {
  const asciiBanner = document.getElementById('ascii-banner');

  // Función para medir el ancho real de un carácter
  function getCharWidth(element) {
    const span = document.createElement('span');
    span.textContent = 'M'; // Carácter de referencia
    span.style.fontFamily = getComputedStyle(element).fontFamily;
    span.style.fontSize = getComputedStyle(element).fontSize;
    span.style.visibility = 'hidden';
    span.style.position = 'absolute';
    document.body.appendChild(span);
    const width = span.getBoundingClientRect().width;
    document.body.removeChild(span);
    return width;
  }

  // Cargar arte ASCII y posicionar botones
  fetch('banner.txt')
    .then(response => response.text())
    .then(data => {
      asciiBanner.textContent = data;

      setTimeout(() => {
        const computedStyle = getComputedStyle(asciiBanner);
        const lineHeight = parseFloat(computedStyle.lineHeight);
        const charWidth = getCharWidth(asciiBanner); // <-- CORRECCIÓN 1

        console.log(`✅ Arte cargado y listo para medir.`);
        console.log(`📏 Medidas por carácter (px): ${charWidth.toFixed(2)} W × ${lineHeight.toFixed(2)} H`);

        const columnStart = 151;
        const buttonWidthChars = 22;
        const pixelAdjustment = 10.5; // <-- 🔥 AJUSTA ESTE VALOR PARA EL AJUSTE FINO 🔥

        const positionLink = (selector, topRow, leftCol) => {
          const element = document.querySelector(selector);
          if (element) {
            element.style.top = `${topRow * lineHeight}px`;
            element.style.left = `${(leftCol * charWidth) + pixelAdjustment}px`; // <-- CORRECCIÓN 2
            element.style.width = `${buttonWidthChars * charWidth}px`;
            element.style.height = `${lineHeight}px`;
          }
        };

        // Posicionar todos los botones
        positionLink('.tech-1', 2, columnStart);
        positionLink('.tech-2', 3, columnStart);
        positionLink('.tech-3', 4, columnStart);

        positionLink('.research-1', 6, columnStart);
        positionLink('.research-2', 7, columnStart);
        positionLink('.research-3', 8, columnStart);

        positionLink('.skills-1', 10, columnStart);
        positionLink('.skills-2', 11, columnStart);
        positionLink('.skills-3', 12, columnStart);
        
        positionLink('.ascii-1', 14, columnStart);
        positionLink('.ascii-2', 15, columnStart);
        positionLink('.ascii-3', 16, columnStart);

        positionLink('.contact-1', 18, columnStart);
        positionLink('.contact-2', 19, columnStart);
        positionLink('.contact-3', 20, columnStart);

        console.log('✅ Botones posicionados con un ajuste de: ' + pixelAdjustment + 'px');
      }, 0);
    })
    .catch(error => {
      console.error('⚠️ Error al cargar el banner:', error);
    });
});
