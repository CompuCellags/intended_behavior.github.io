/* ╔════════════════════════════════════════════════════════════════════════════╗
   ║  Módulo: research.js                                                       ║
   ║  Versión: v2.0 — 2025-09-29 — Lógica para el hub de investigación           ║
   ╚════════════════════════════════════════════════════════════════════════════╝ */

window.addEventListener('DOMContentLoaded', () => {
  const asciiBanner = document.getElementById('ascii-banner');

  function getCharDimensions(element) {
    const span = document.createElement('span');
    span.textContent = 'M';
    span.style.fontFamily = getComputedStyle(element).fontFamily;
    span.style.fontSize = getComputedStyle(element).fontSize;
    span.style.visibility = 'hidden';
    span.style.position = 'absolute';
    document.body.appendChild(span);
    const { width, height } = span.getBoundingClientRect();
    document.body.removeChild(span);
    return { charWidth: width, lineHeight: height };
  }

  fetch('banner3.txt')
    .then(response => response.text())
    .then(data => {
      asciiBanner.textContent = data;
      setTimeout(() => {
        const { charWidth, lineHeight } = getCharDimensions(asciiBanner);
        console.log(`📏 Medidas por carácter (px): ${charWidth.toFixed(2)} W × ${lineHeight.toFixed(2)} H`);

        const positionLink = (selector, topRow, leftCol, widthChars, heightRows = 1) => {
          const element = document.querySelector(selector);
          if (element) {
            element.style.top = `${topRow * lineHeight}px`;
            element.style.left = `${leftCol * charWidth}px`;
            element.style.width = `${widthChars * charWidth}px`;
            element.style.height = `${heightRows * lineHeight}px`;
          }
        };

        // --- Coordenadas para los botones de investigación ---
        positionLink('.apple-case', 19, 2, 53, 3);
        positionLink('.msrc-case', 23, 2, 53, 3);
        positionLink('.gcp-case', 27, 2, 53, 3);
        positionLink('.back-button', 32, 20, 22);

        console.log('✅ Botones del portafolio de investigación posicionados.');
      }, 100); 
    })
    .catch(error => {
      console.error('⚠️ Error al cargar el banner de investigación:', error);
    });
});
