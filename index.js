/* ╔════════════════════════════════════════════════════════════════════════════╗
   ║  Módulo: index.js — Arte ASCII interactivo como botón                     ║
   ║  Versión: v5.1 — 2025-09-26 — Superposición ética y trazabilidad modular ║
   ╚════════════════════════════════════════════════════════════════════════════╝ */

window.addEventListener('DOMContentLoaded', () => {
  const asciiBanner = document.getElementById('ascii-banner');

  // 📏 Medir ancho de carácter monospace
  function getCharWidth(element) {
    const span = document.createElement('span');
    span.textContent = 'M';
    Object.assign(span.style, {
      fontFamily: getComputedStyle(element).fontFamily,
      fontSize: getComputedStyle(element).fontSize,
      visibility: 'hidden',
      position: 'absolute'
    });
    document.body.appendChild(span);
    const width = span.getBoundingClientRect().width;
    document.body.removeChild(span);
    return width;
  }

  // 📦 Cargar arte ASCII desde archivo externo
  fetch('banner.txt')
    .then(response => response.text())
    .then(data => {
      asciiBanner.textContent = data;

      // ⏱️ Esperar render para medir con precisión
      setTimeout(() => {
        const style = getComputedStyle(asciiBanner);
        const lineHeight = parseFloat(style.lineHeight);
        const charWidth = getCharWidth(asciiBanner);
        const pixelAdjustment = 2.5;

        console.log(`✅ Arte cargado. Medidas: ${charWidth.toFixed(2)}px × ${lineHeight.toFixed(2)}px`);

        // 🎯 Posicionar zona clicable sobre coordenadas
        function positionZone(selector, topRow, leftCol, widthChars = 22, heightLines = 1) {
          const element = document.querySelector(selector);
          if (!element) {
            console.warn(`⚠️ Elemento no encontrado: ${selector}`);
            return;
          }
          Object.assign(element.style, {
            top: `${topRow * lineHeight}px`,
            left: `${(leftCol * charWidth) + pixelAdjustment}px`,
            width: `${widthChars * charWidth}px`,
            height: `${heightLines * lineHeight}px`
          });
        }

        // 🧭 Coordenadas de zonas activas
        const zones = [
          { selector: '.tech-1', top: 2, left: 151 },
          { selector: '.research-1', top: 6, left: 151 },
          { selector: '.skills-1', top: 10, left: 151 },
          { selector: '.ascii-1', top: 14, left: 151 },
          { selector: '.contact-1', top: 18, left: 151 }
        ];

        zones.forEach(zone => positionZone(zone.selector, zone.top, zone.left));

        console.log('✅ Zonas clicables posicionadas.');
      }, 0);
    })
    .catch(error => {
      console.error('⚠️ Error al cargar el banner:', error);
    });
});
