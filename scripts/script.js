// JavaScript Document

/* hamburgermenu openen de MENU button */

// stap 1: zoek de menu-button op
const openButton = document.querySelector("header > button");

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
