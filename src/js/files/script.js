// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from './functions.js';
// Підключення списку активних модулів
import { flsModules } from './modules.js';

// Wrap every letter in a span

const headerBtmBorder = document.querySelector('.header__bottom-border');

window.addEventListener('scroll', (e) => {
  if (window.scrollY > 1) {
    headerBtmBorder.classList.add('active-scroll');
  }
  if (window.scrollY < 1) {
    headerBtmBorder.classList.remove('active-scroll');
  }
});
