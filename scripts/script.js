// JavaScript Document

/* hamburgermenu openen de MENU button */

// stap 1: zoek de menu-button op
const openButton = document.querySelector("header > ul > li:first-child button");

// stap 2: laat de menu-button luisteren naar kliks
openButton.addEventListener("click", openMenu);

// stap 3: voeg in de functie een class toe aan de nav
function openMenu() {
  const deNav = document.querySelector("nav");
  deNav.classList.add("toonMenu");
}


/* menu sluiten met de sluit button */

// stap 1 - zoek sluiten button op
const sluitButton = document.querySelector("nav > button");

// stap 2 - laat die button luisteren naar kliks
sluitButton.addEventListener("click", sluitMenu);

// stap 3 - in de functie verwijder de class van de nav
function sluitMenu() {
  const deNav = document.querySelector("nav");
  deNav.classList.remove("toonMenu");
}









/* HEREN (toonMannenSchoenen) -------------------------------------- */
/* stap 1 */
const knopHeren = document.querySelector("nav > ul:nth-of-type(1) li:first-child > button");

/* stap 2 */
knopHeren.addEventListener("click", openMannenSchoenenMenu);

/* stap 3 */
function openMannenSchoenenMenu() {
  const deNav = document.querySelector("nav");
  deNav.classList.add("toonMannenSchoenen");
  deNav.classList.remove("toonMannenSneakers");
}

/* ← Terug vanuit HEREN (naar hoofdmenu) --------------------------- */
/* stap 1 */
const knopTerugHeren = document.querySelector("nav > ul:nth-of-type(3) li:first-child > button");
/* stap 2 */
knopTerugHeren.addEventListener("click", terugNaarHoofdMenu);
/* stap 3 */
function terugNaarHoofdMenu() {
  const deNav = document.querySelector("nav");
  deNav.classList.remove("toonMannenSchoenen");
  deNav.classList.remove("toonMannenSneakers");
}

/* HEREN → SNEAKERS (toonMannenSneakers) --------------------------- */
/* stap 1 */
const knopSchoenen = document.querySelector("nav > ul:nth-of-type(3) li:nth-child(2) > button");
/* stap 2 */
knopSchoenen.addEventListener("click", openMannenSneakersMenu);
/* stap 3 */
function openMannenSneakersMenu() {
  const deNav = document.querySelector("nav");
  deNav.classList.add("toonMannenSneakers");
  deNav.classList.remove("toonMannenSchoenen");
}

/* ← Terug vanuit SNEAKERS (terug naar HEREN) ---------------------- */
/* stap 1 */
const knopTerugSneakers = document.querySelector("nav > ul:nth-of-type(4) li:first-child > button");
/* stap 2 */
knopTerugSneakers.addEventListener("click", terugNaarMannenSchoenenMenu);
/* stap 3 */
function terugNaarMannenSchoenenMenu() {
  const deNav = document.querySelector("nav");
  deNav.classList.add("toonMannenSchoenen");
  deNav.classList.remove("toonMannenSneakers");
}

/* optioneel: reset naar hoofdmenu bij openen hamburger / sluiten X */
const knopHamburger = document.querySelector("header > ul > li:first-child button");
knopHamburger.addEventListener("click", resetNaarHoofdMenu);

const knopSluitNav = document.querySelector("nav > button");
knopSluitNav.addEventListener("click", resetNaarHoofdMenu);

function resetNaarHoofdMenu() {
  const deNav = document.querySelector("nav");
  deNav.classList.remove("toonMannenSchoenen");
  deNav.classList.remove("toonMannenSneakers");
}

