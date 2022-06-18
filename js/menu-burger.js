const navMain = document.querySelector('.page-header__list');
const navToggle = document.querySelector('.burger');

// бургер
navToggle.addEventListener('click', () => {
  navMain.classList.toggle('page-header__list--closed');
  navToggle.classList.toggle('burger--open');
  navToggle.classList.toggle('burger--close');
});
