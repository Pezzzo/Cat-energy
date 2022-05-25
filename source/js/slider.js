/* global noUiSlider:readonly */
const sliderImgFat = document.querySelector('.example-slider__img-mobile-fat');
const sliderImgSkinny = document.querySelector('.example-slider__img-mobile-skinny');
const sliderButtonLeft = document.querySelector('.example-slider__button-switch--left');
const sliderButtonRight = document.querySelector('.example-slider__button-switch--right');
const buttonsSwitch = document.querySelectorAll('.example-slider__button-switch');
const slider = document.querySelector('.slider-round');
const fatCat = document.querySelector('.example-slider__img--fat');
const fatSkinny = document.querySelector('.example-slider__img--skinny');
const inputSliderValue = document.querySelector('.input-range');
const sliderSwitchLeft = document.querySelector('.example-slider__condition-button--left');
const sliderSwitchRight = document.querySelector('.example-slider__condition-button--right');

// слайдер до планшетной версии (разрешение)
const buttonsSwitchReset = () => {
  buttonsSwitch.forEach(el => {
    el.classList.remove('example-slider__button-switch--active');
  });
};

const onLeftButtonClick = () => {
  buttonsSwitchReset();
  sliderButtonLeft.classList.add('example-slider__button-switch--active');
  sliderImgFat.classList.remove('example-slider__img--none');
  sliderImgSkinny.classList.add('example-slider__img--none');
};

const onRightButtonClick = () => {
  buttonsSwitchReset();
  sliderButtonRight.classList.add('example-slider__button-switch--active');
  sliderImgFat.classList.add('example-slider__img--none');
  sliderImgSkinny.classList.remove('example-slider__img--none');
};

sliderButtonLeft.addEventListener('click', onLeftButtonClick);
sliderSwitchLeft.addEventListener('click', onLeftButtonClick);


sliderButtonRight.addEventListener('click', onRightButtonClick);
sliderSwitchRight.addEventListener('click', onRightButtonClick);

// слайдер с планшетной версии и выше
noUiSlider.create(slider, {
  start: [340],
  step: 1,
  connect: true,
  range: {
      'min': 0,
      'max': 680
  },
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(0.1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

slider.noUiSlider.on('update', (values, handle) => {
  inputSliderValue.value = values[handle];
  fatSkinny.style.clip = 'rect(0 680px 500px ' + inputSliderValue.value + 'px)';
  fatCat.style.clip = 'rect(0 ' + inputSliderValue.value + 'px 500px 0)';
});


