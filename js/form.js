const form = document.querySelector('.program-selection-form');

// валидация формы(бордеры)
form.addEventListener('invalid', (evt) => {
  if (evt.target) {
    evt.target.style.border = '2px solid #ff8282';
  }
},  true);

form.addEventListener('change', (evt) => {
  if (evt.target) {
    evt.target.style.border = '1px solid #e7e7e7';
  }
});
