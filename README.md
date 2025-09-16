#INTENDED BEHAVIOR — Login Ético Modular

**Desarrollado por Develop Aguascalientes**  
Infraestructura reproducible para acceso técnico con privilegios segmentados por propósito.

---

##Propósito

Este módulo forma parte del sistema `intended_behavior`, una arquitectura ética diseñada para:

- Visualizar arte ASCII como escudo institucional.
- Activar privilegios técnicos trazables por entorno (`local`, `remoto`, `simulado`).
- Integrar botones interactivos directamente en el trazado visual sin romper simetría.
- Documentar cada acceso como evidencia de propósito.

---

## 📁 Estructura del proyecto

WEB-UI/ 
├── index.html 
├── index.css 
├── index.js 
├── assets/
│ ├── banner.txt # Arte ASCII reproducible 
│ ├── pixel-bg.png # Fondo visual estilo circuito 
│ ├── icon-access.png # Ícono para acceso técnico 
│ └── icon-audit.png
---


##Cómo ejecutar localmente

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/intended_behavior.git

2. Inicia un servidor local:
   ```bash
   cd intended_behavior/WEB-UI
python3 -m http.server 8000

3. Abre tu navegador:

   http://localhost:8000/login.html

   
---

###Si vas a usar GitHub Pages:

https://CompuCellags.github.io/intended_behavior.github.io/


```markdown
## 🌐 Acceso vía GitHub Pages

Si estás usando GitHub Pages, accede al login desde:


> Este sistema detecta si estás en entorno local (`file:`) o remoto (`http:`) y ajusta privilegios visuales en consecuencia. Cada carga del banner ASCII se registra como evidencia de trazado activo.




   



