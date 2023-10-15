// Fonction pour afficher ou masquer le bouton en fonction du défilement de la page
function toggleBackToTopButton() {
  var button = document.querySelector(".backToTopBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      button.style.display = "block";
  } else {
      button.style.display = "none";
  }
}

// Fonction pour faire défiler la page en haut lorsque le bouton est cliqué
function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Écouteurs d'événements
window.onscroll = toggleBackToTopButton;
document.querySelector(".backToTopBtn").onclick = scrollToTop;
