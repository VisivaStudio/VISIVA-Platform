/* ==========================================================================
   VISIVA® UI INTERACTIONS
   Mega menu, mobile nav, tabs, timeline modal, accordion
   ========================================================================== */

import * as THREE from '../../vendor/three.module.js';

export const toggleMenu = (button, menu) => {
  button.addEventListener("click", () => {
    const expanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", !expanded);
    menu.classList.toggle("visible");
  });
};

document.addEventListener("DOMContentLoaded", () => {
  const toggles = document.querySelectorAll(".dropdown-toggle");

  toggles.forEach((btn) => {
    const menu = btn.nextElementSibling;
    if (menu) toggleMenu(btn, menu);
  });
});/* ======================================================
   HERO OBJECT (PLACEHOLDER)
====================================================== */
export const ring = new THREE.Mesh(
  new THREE.TorusGeometry(0.35, 0.08, 32, 100),
  new THREE.MeshStandardMaterial({
    color: 0xd4af37,
    metalness: 0.8,
    roughness: 0.2
  })
);

