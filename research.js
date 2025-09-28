/* ╔════════════════════════════════════════════════════════════════════════════╗
   ║  Módulo: research.js                                                       ║
   ║  Versión: v1.0 — 2025-09-27 — Lógica para el portafolio de investigación   ║
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

  fetch('banner3.txt')
    .then(response => response.text())
    .then(data => {
      asciiBanner.textContent = data;
      setTimeout(() => {
        const computedStyle = getComputedStyle(asciiBanner);
        // Medir lineHeight directamente desde el elemento renderizado para mayor precisión.
        const tempSpan = document.createElement('span');
        tempSpan.textContent = 'M';
        tempSpan.style.fontFamily = computedStyle.fontFamily;
        tempSpan.style.fontSize = computedStyle.fontSize;
        tempSpan.style.visibility = 'hidden';
        tempSpan.style.position = 'absolute';
        asciiBanner.appendChild(tempSpan);
        const lineHeight = tempSpan.getBoundingClientRect().height;
        asciiBanner.removeChild(tempSpan);
        
        const charWidth = getCharWidth(asciiBanner);
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
        // (Fila de inicio, Columna de inicio, Ancho en caracteres)
        positionLink('.gcp-case', 9, 3, 67, 3);
        positionLink('.chromeos-case', 14, 3, 67, 3);
        positionLink('.back-button', 22, 26, 20);

        console.log('✅ Botones del portafolio de investigación posicionados.');
      }, 100); // Un pequeño retardo para asegurar que todo esté renderizado
    })
    .catch(error => {
      console.error('⚠️ Error al cargar el banner de investigación:', error);
    });
});

