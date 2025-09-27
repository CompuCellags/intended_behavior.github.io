// === research.js ===
// Comportamiento ético modular para investigaciones independientes

document.addEventListener('DOMContentLoaded', () => {
  // Activación por módulo
  const modules = document.querySelectorAll('.research-module');

  modules.forEach((module, index) => {
    const findings = module.querySelectorAll('li');
    const header = module.querySelector('h2')?.textContent || `Módulo ${index + 1}`;

    // Trazabilidad de hallazgos individuales
    findings.forEach(item => {
      item.addEventListener('click', () => {
        console.log(`[TRACE] ${header} → Hallazgo consultado: ${item.textContent}`);
        item.style.backgroundColor = '#f5e6d3';
      });
    });

    // Privilegio narrativo por módulo
    module.addEventListener('mouseenter', () => {
      module.style.borderLeftColor = '#a67c52';
      console.log(`[PRIVILEGE] Activado en "${header}"`);
    });

    module.addEventListener('mouseleave', () => {
      module.style.borderLeftColor = '#a67c52';
    });
  });
});

