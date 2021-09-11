'use strict';

import {domElement, classNames} from './settings.js';

//get elements
const coinButtons = domElement.home.coinButtons;
const localWeatherTrigger = domElement.home.localWeatherTrigger;
const backHomeButton = domElement.home.backHomeButton;
const localWeatherPage = domElement.localWeather.page;
const localWeatherWidget = domElement.localWeather.widget;

export const initHomePage = () => {
  localWeatherTrigger.addEventListener('click', function(e) {
    e.preventDefault();
    for (const button of coinButtons) {
      if (button.classList.contains(classNames.home.elemGoBack)) {
        button.classList.remove(classNames.home.elemGoBack);
      }
      button.classList.add(classNames.home.elemGoAway);
      button.classList.add(classNames.home.elemHide);
    }  
    backHomeButton.classList.add(classNames.home.elemGoBack)
    backHomeButton.classList.add(classNames.home.elemShow)
  
    localWeatherPage.classList.add(classNames.home.pageActive);
  
    localWeatherWidget.classList.add(classNames.home.elemGoBack);
    localWeatherWidget.classList.add(classNames.home.elemShow);
  });

  backHomeButton.addEventListener('click', function(e) {
    e.preventDefault();
    for (const button of coinButtons) {
      button.classList.remove(classNames.home.elemGoAway);
      button.classList.remove(classNames.home.elemHide);
  
      button.classList.add(classNames.home.elemGoBack);
    }
    backHomeButton.classList.remove(classNames.home.elemGoAway);
    backHomeButton.classList.remove(classNames.home.elemShow);
  
    localWeatherWidget.classList.remove(classNames.home.elemGoBack);localWeatherWidget.classList.remove(classNames.home.elemShow);
  
    localWeatherWidget.classList.add(classNames.home.elemGoAway);
    localWeatherWidget.classList.add(classNames.home.elemHide);
  
    setTimeout(function(){
      localWeatherPage.classList.remove(classNames.home.pageActive); 
    }, 500);
    backHomeButton.classList.add(classNames.home.elemGoAway);
    backHomeButton.classList.add(classNames.home.elemHide);
  });
}