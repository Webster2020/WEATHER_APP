'use strict'

//GET ELEMENTS
const coinButtons = document.querySelectorAll('.coin-button');
const localWeatherDomTrigger = document.querySelector('.button-wrapper .weather-button');
const navButton = document.querySelector('.nav-button-home');
const localWeatherPageDom = document.querySelector('.local-weather-page');
const localWeatherWidget = document.querySelector('.weather-widget');

localWeatherDomTrigger.addEventListener('click', function(e) {
  e.preventDefault();
  for (const button of coinButtons) {
    if (button.classList.contains('elem-go-back')) {
      button.classList.remove('elem-go-back');
    }
    button.classList.add('elem-go-away', 'elem-hide');
  }  
  navButton.classList.add('elem-go-back', 'elem-show');
  localWeatherPageDom.classList.add('active');
  localWeatherWidget.classList.add('elem-go-back', 'elem-show');
})

navButton.addEventListener('click', function(e) {
  e.preventDefault();
  for (const button of coinButtons) {
    button.classList.remove('elem-go-away', 'elem-hide');
    button.classList.add('elem-go-back');
  }
  navButton.classList.remove('elem-go-back', 'elem-show');
  localWeatherWidget.classList.remove('elem-go-back', 'elem-show');
  localWeatherWidget.classList.add('elem-go-away', 'elem-hide');
  setTimeout(function(){
    localWeatherPageDom.classList.remove('active'); 
  }, 500);
  navButton.classList.add('elem-go-away', 'elem-hide');
})
