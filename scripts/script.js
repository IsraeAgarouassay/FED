// JavaScript Document

/* hamburgermenu openen de MENU button */

const openButton = document.querySelector("header > ul > li:first-child button");

openButton.addEventListener("click", openMenu);

function openMenu() {
  const deNav = document.querySelector("nav");
  deNav.classList.add("toonMenu");
}

/* menu sluiten met de sluit button */
const sluitButton = document.querySelector("nav > button");


sluitButton.addEventListener("click", sluitMenu);

function sluitMenu() {
  const deNav = document.querySelector("nav");
  deNav.classList.remove("toonMenu");
}



/* HEREN (toonMannenSchoenen) -------------------------------------- */

const knopHeren = document.querySelector("nav > ul:nth-of-type(1) li:first-child > button");

knopHeren.addEventListener("click", openMannenSchoenenMenu);

function openMannenSchoenenMenu() {
  const deNav = document.querySelector("nav");
  deNav.classList.add("toonMannenSchoenen");
  deNav.classList.remove("toonMannenSneakers");
}

/* HEREN → SNEAKERS (toonMannenSneakers) --------------------------- */
const knopSchoenen = document.querySelector("nav > ul:nth-of-type(3) li:nth-child(1) > button");

knopSchoenen.addEventListener("click", openMannenSneakersMenu);

function openMannenSneakersMenu() {
  const deNav = document.querySelector("nav");
  deNav.classList.add("toonMannenSneakers");
  deNav.classList.remove("toonMannenSchoenen");
}

/*terug naar hoofdmenu bij openen hamburger en sluiten*/
const knopHamburger = document.querySelector("header > ul > li:first-child button");

knopHamburger.addEventListener("click", terugNaarHoofdMenu);

const knopSluitNav = document.querySelector("nav > button");
knopSluitNav.addEventListener("click", terugNaarHoofdMenu);

function terugNaarHoofdMenu() {
  const deNav = document.querySelector("nav");
  deNav.classList.remove("toonMannenSchoenen");
  deNav.classList.remove("toonMannenSneakers");
}

// https://javascriptf1.com/snippet/detect-escape-key-press-in-javascript
document.addEventListener('keydown', evt => {
  // checkt of de ingedrukte toets de Escape-toets is
    if (evt.key === 'Escape') {
        const nav = document.querySelector('nav');
    if (nav) nav.classList.remove('toonMenu', 'toonMannenSchoenen', 'toonMannenSneakers');
    }
});


// DETAILPAGINA - kleur schoen veranderen

// Knoppen (labels) in fieldset 1 
const BlauweSchoen = document.querySelector(
  'body.detailpagina main form fieldset:nth-of-type(1) ul li:nth-of-type(1) input[type="radio"]'
);
const ZilvereSchoen = document.querySelector(
  'body.detailpagina main form fieldset:nth-of-type(1) ul li:nth-of-type(3) input[type="radio"]'
);

// de twee Carrousels 
const Eerstecarrousel = document.querySelector(
  'body.detailpagina main section:nth-of-type(1) > ul:nth-of-type(1)'
);
const Tweedecarrousel = document.querySelector(
  'body.detailpagina main section:nth-of-type(1) > ul:nth-of-type(2)'
);


if (BlauweSchoen && ZilvereSchoen && Eerstecarrousel && Tweedecarrousel) {
function toonTweedeCarrousel() {
console.log('blauwe schoen toegevoegd');
 Eerstecarrousel.classList.add('hidden');
 Tweedecarrousel.classList.remove('hidden');
}

function toonEersteCarrousel() {
  console.log('zilvere schoen toegevoegd');
 Tweedecarrousel.classList.add('hidden');
 Eerstecarrousel.classList.remove('hidden');
}

BlauweSchoen.addEventListener('click', toonTweedeCarrousel);
ZilvereSchoen.addEventListener('click', toonEersteCarrousel);

// starttoestand: 1e zichtbaar, 2e verborgen
Eerstecarrousel.classList.remove('hidden');
Tweedecarrousel.classList.add('hidden');
}


/************************/
/* winkelwagen */
/************************/

// https://pixabay.com/sound-effects/search/finished/
const geluidToegevoegd = new Audio('geluid/toegevoegd-geluid.mp3');

// alle “in winkelwagen”-knoppen binnen de 2e section
let winkelKnoppen = document.querySelectorAll("section:nth-of-type(2) button:first-of-type");
for (let i = 0; i < winkelKnoppen.length; i++) {
  winkelKnoppen[i].onclick = toevoegenAanWinkelwagen;
}

// winkelwagen vullen
function toevoegenAanWinkelwagen() {
  /* bolletje op de winkelwagen */
  let winkelwagenAantal = document.querySelector("header > ul:first-of-type li:last-child > a > span");
  let huidigAantal = parseInt(winkelwagenAantal.innerHTML);
  let nieuwAantal = huidigAantal + 1;
  winkelwagenAantal.innerHTML = nieuwAantal;

  geluidToegevoegd.play();

  // https://www.youtube.com/watch?v=0OVg4ikUaz0&t=28s
  // Laad-status tonen
  const geklikteKnop = this;
  geklikteKnop.textContent = "Toevoegen...";

  // Na ~1,1s "Toegevoegd ✔"
  setTimeout(() => {
    geklikteKnop.textContent = "Toegevoegd ✔";
  }, 1100);

  /* animatie van het getal dat zichtbaar is */
  winkelwagenAantal.classList.add("updated");
  winkelwagenAantal.onanimationend = () => {
    winkelwagenAantal.classList.remove("updated");
  };
}


/************************/
/* toevoegen aan wishlist */
/************************/

var hartKnoppen = document.querySelectorAll(
  "section h2 + ul + ul li > button, section h2 + ul + ul + ul li > button"
);

for (var i = 0; i < hartKnoppen.length; i++) {
  // begin-stand van de titel (tooltip)
  hartKnoppen[i].title = "Toevoegen aan favorieten";
  hartKnoppen[i].onclick = toevoegenFavoriet;
}

// Toevoegen en verwijderen uit wishlist
  function toevoegenFavoriet(event) {

  let gekliktHart = event.target.closest("button");
  let hetProduct = gekliktHart.closest("li");
  hetProduct.classList.toggle("liked");

  /* bolletje op de wishlist*/
  let verlanglijstAantal = document.querySelector("header > ul:first-of-type li:nth-of-type(2) > a > span");
  let huidigAantal = parseInt(verlanglijstAantal.innerHTML);
  let nieuwAantal;

  if (hetProduct.classList.contains("liked")) {
    nieuwAantal = huidigAantal + 1;
    gekliktHart.title = "Toegevoegd";
  } else {
    nieuwAantal = huidigAantal - 1;
    gekliktHart.title = "Toevoegen aan favorieten";
  }

  verlanglijstAantal.innerHTML = nieuwAantal;
  verlanglijstAantal.classList.add("updated");

  setTimeout(function () {
    verlanglijstAantal.classList.remove("updated");
  }, 400);
}

// HOMEPAGINA - Productlijst zichtbaar maken en onzichtbaar

// productlijsten
const productLijst1 = document.querySelector('main section:nth-of-type(5) > ul:nth-of-type(2)');
const productLijst2 = document.querySelector('main section:nth-of-type(5) > ul:nth-of-type(3)');


// knoppen boven productlijst
const knopExclusieveLeden = document.querySelector('main section:nth-of-type(5) > ul:nth-of-type(1) li:nth-of-type(1) > button');
const knopNieuweProducten = document.querySelector('main section:nth-of-type(5) > ul:nth-of-type(1) li:nth-of-type(2) > button');


if (productLijst1 && productLijst2 && knopExclusieveLeden && knopNieuweProducten) {
function toonProductLijst1() {
  productLijst2.classList.add('hidden');
  productLijst1.classList.remove('hidden');
}

function toonProductLijst2() {
  productLijst1.classList.add('hidden');
  productLijst2.classList.remove('hidden');
}

knopExclusieveLeden.addEventListener('click', toonProductLijst1);
knopNieuweProducten.addEventListener('click', toonProductLijst2);

// starttoestand: 1e zichtbaar, 2e verborgen
productLijst1.classList.remove('hidden');
productLijst2.classList.add('hidden');
}


