# TupunTravels - Premium Wine Tours Landing Page 🍷🚐

Bienvenido al repositorio de **TupunTravels**, una Landing Page tipo Single Page Application (SPA) diseñada para una empresa de transporte y turismo premium en Mendoza, especializada en recorridos exclusivos por bodegas de alta gama.

## 🎯 Sobre el Proyecto

El objetivo de esta landing page es transmitir **seriedad, seguridad y exclusividad**. Para lograrlo, se optó por un diseño fuertemente inspirado en sectores B2B corporativos (tech/defense), caracterizado por el uso del espacio negativo, una paleta de colores en modo oscuro estricto y sutiles animaciones dinámicas.

### ✨ Características Principales

*   **Estética "Dark Mode" Premium:** Fondos oscuros profundos (`#0a0a0a`) con detalles y botones en tonos *Wine Red* para evocar la temática vitivinícola sin perder el tono corporativo.
*   **Hero Section Dinámico:** Implementación de un efecto de *Parallax Scrolling* asimétrico en la que el arte lineal de un transporte premium se desplaza sutilmente en segundo plano al hacer scroll.
*   **Animaciones Fluidas (UI/UX):** 
    *   Efectos *Glassmorphism* (cristal esmerilado) en la barra de navegación al hacer scroll.
    *   Tarjetas de servicios con efectos *Hover* magnéticos y transiciones suaves.
    *   Estadísticas clave con contadores visuales animados por intersección (Intersection Observer).
*   **Formulario de Contacto Interactivo:** UI de formulario flotante con manejo de estados interactivos (Normal, Focus y Error) basado en las últimas tendencias de diseño UI.
*   **Totalmente Responsivo:** Adaptado meticulosamente para dispositivos móviles, tablets y monitores de alta resolución.

## 🛠️ Tecnologías Utilizadas

Este proyecto fue construido con un enfoque ligero y de alto rendimiento, sin necesidad de frameworks pesados:

*   **HTML5 Semántico:** Estructura accesible y limpia.
*   **CSS3 & Tailwind CSS (CDN):** Estilado utilitario rápido para lograr el diseño pixel-perfect y el manejo de colores globales.
*   **Vanilla JavaScript (ES6+):** Lógica encargada de controlar el Scroll Parallax, la aparición de elementos en pantalla y el comportamiento dinámico del Header.
*   **Google Fonts:** Tipografía *Inter* y *Outfit* para una legibilidad moderna.

## 🚀 Instalación y Uso Local

Dado que el proyecto no usa empaquetadores (bundlers), probarlo es extremadamente sencillo:

1.  Clona el repositorio:
    ```bash
    git clone https://github.com/Giulianolapiana/tupuntravels-landing.git
    ```
2.  Abre la carpeta del proyecto.
3.  Simplemente abre el archivo [index.html](cci:7://file:///c:/Users/giuli/OneDrive/Documentos/IA%20programs/FormularioPrueba/index.html:0:0-0:0) en cualquier navegador web moderno.
    *(Opcional: puedes usar extensiones como "Live Server" en VS Code para tener recarga automática al editar).*

## 🎨 Decisiones de Diseño (UI/UX)

*   Se utilizó la técnica de **CSS Radial Masking** y algoritmos de **Mix-Blend-Mode** (`screen`) para lograr que los recursos gráficos vectoriales (como el arte lineal de la camioneta) se fusionen tridimensionalmente con el fondo de la página, sin usar PNGs pesados con canales alfa complejos.
*   Los contrastes en los textos han sido ajustados pensando en la accesibilidad sobre fondos oscuros, manteniendo la jerarquía visual mediante opacidades (`text-gray-400` vs `text-white`).

---
*Desarrollado con foco en la excelencia visual.*
