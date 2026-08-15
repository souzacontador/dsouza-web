/* ==========================================================================
   DSouza — Aplicación Web
   Lógica principal (JavaScript vanilla, ES6+)
   ========================================================================== */

'use strict';

/**
 * Inicializa la aplicación una vez que el DOM está listo.
 */
const init = () => {
  setYear();
  bindDemoButton();
  console.info('[DSouza] Aplicación web inicializada.');
};

/**
 * Coloca el año actual en el pie de página.
 */
const setYear = () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
};

/**
 * Conecta el botón de demostración para probar que el JS funciona.
 */
const bindDemoButton = () => {
  const btn = document.getElementById('btn-demo');
  const output = document.getElementById('demo-output');
  if (!btn || !output) return;

  const mensajes = [
    '¡JavaScript funcionando correctamente! ✅',
    'ES6+ listo para tu lógica.',
    'Edita js/app.js para empezar a construir.',
  ];
  let i = 0;

  btn.addEventListener('click', () => {
    output.textContent = mensajes[i % mensajes.length];
    i += 1;
  });
};

document.addEventListener('DOMContentLoaded', init);
