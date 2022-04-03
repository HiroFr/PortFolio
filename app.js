// Définir les variables
let texte1 = document.getElementById('nav1');
let texte2 = document.getElementById('nav2');
let texte3 = document.getElementById('nav3');
let menu = document.getElementById('img_1');
let menuClose = document.getElementById('img_2');

// Appliquer un style par défault
texte1.style.display = 'none';
texte2.style.display = 'none';
texte3.style.display = 'none';
menuClose.style.display = 'none';


// Définir une fonction lorsqu'on clique sur un élément
menu.onclick = () => {
    texte1.style.display = 'flex';
    texte2.style.display = 'flex';
    texte3.style.display = 'flex';
    menuClose.style.display = 'flex';
    menu.style.display = 'none';
}

menuClose.onclick = () => {
    texte1.style.display = 'none';
    texte2.style.display = 'none';
    texte3.style.display = 'none';
    menuClose.style.display = 'none';
    menu.style.display = 'flex';
}