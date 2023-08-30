'use strict';

const burgerButton = document.getElementById('burger-button');
const burgerMenu = document.getElementById('burger-menu');

burgerButton.addEventListener('click', toggleBurgerMenu);

function toggleBurgerMenu() {
  const elementClass = burgerMenu.getAttribute('class');
  console.log(elementClass);
  if (elementClass === 'open-menu') {
    burgerMenu.setAttribute('class', 'visually-hidden');
    return;
  }
  burgerMenu.setAttribute('class', 'open-menu');
  return;
}
