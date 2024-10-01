import "./style.css";

// Récupération des éléments
const menubar = document.getElementById('menubar');
const mobileNav = document.getElementById('mobile-nav');
const backdrop = document.getElementById('backdrop');
const menuIcon = document.getElementById('menu-icon');

const ELE = document.documentElement;
// Fonction pour ouvrir/fermer le menu
menubar.addEventListener('click', () => {
  const isNavOpen = mobileNav.classList.contains('h-96');

  if (isNavOpen) {
    // Fermer le menu mobile
    mobileNav.classList.remove('h-96');
    mobileNav.classList.add('h-0');
    backdrop.classList.add('hidden');
    menuIcon.classList.remove('fa-times');
    menuIcon.classList.add('fa-bars'); // Remplacer par fa-bars
    ELE.classList.remove('overflow-hidden'); // Réactiver le scrolling
  } else {
    // Ouvrir le menu mobile
    mobileNav.classList.remove('h-0');
    mobileNav.classList.add('h-96');
    backdrop.classList.remove('hidden');
    menuIcon.classList.remove('fa-bars'); // Remplacer par fa-times
    menuIcon.classList.add('fa-times');
    ELE.classList.toggle('overflow-hidden'); // Désactiver le scrolling
  }
});

// Fermer le menu si l'utilisateur clique sur le backdrop
backdrop.addEventListener('click', () => {
  mobileNav.classList.remove('h-96');
  mobileNav.classList.add('h-0');
  backdrop.classList.add('hidden');
  menuIcon.classList.remove('fa-times'); // Remplacer par fa-bars
  menuIcon.classList.add('fa-bars');
  document.body.classList.remove('overflow-hidden'); // Réactiver le scrolling
});


  /*theme change
  */
  document.querySelectorAll(".theme-switch").forEach((item) =>{
    item.addEventListener("click", ()=>{
        ELE.classList.toggle("dark");
        ELE.classList.contains("dark")
        ? localStorage.setItem("theme","dark")
        : localStorage.setItem("theme","light")
    });
 }) ;
 ELE.classList.add(localStorage.getItem("theme"));