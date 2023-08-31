'use strict';

const burgerButton = document.getElementById('burger-button');
const burgerMenu = document.getElementById('burger-menu');
const backdrop = document.getElementById('backdrop');

burgerButton.addEventListener('click', toggleBurgerMenu);

function toggleBurgerMenu() {
  const elementClass = burgerMenu.getAttribute('class');
  if (elementClass === 'open-menu') {
    burgerMenu.setAttribute('class', 'visually-hidden');
    backdrop.setAttribute('class', 'visually-hidden');
    return;
  }
  burgerMenu.setAttribute('class', 'open-menu');
  backdrop.setAttribute('class', 'show');
  return;
}
