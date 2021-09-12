'use strict';

import {domElement, classNames} from './settings.js';

//get elements
const notificationDom = domElement.localWeather.notification;
const wrapperDom = domElement.localWeather.wrapper;
const iconDom = domElement.localWeather.icon;
const tempDom = domElement.localWeather.temp;
const presDom = domElement.localWeather.pres;
const windDom = domElement.localWeather.wind;
const descDom = domElement.localWeather.desc;
const locationDom = domElement.localWeather.location;

export const initLocalWeather = () => {
  
  //GETTING GEOLOCATION FROM BROWSER AND CALL GETWEATHER FUNCTION
  const setPosition = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    wrapperDom.classList.contains(classNames.localWeather.hideWeather) && wrapperDom.classList.remove(classNames.localWeather.hideWeather);
    notificationDom.classList.contains(classNames.localWeather.displayNotification) && notificationDom.classList.remove(classNames.localWeather.displayNotification);
    getWeather(latitude, longitude);
  };
  
  const showError = () => {
    notificationDom.classList.add(classNames.localWeather.displayNotification);
    wrapperDom.classList.add(classNames.localWeather.hideWeather);
    //notificationDom.style.display = 'block';
    notificationDom.innerHTML = '<p>BROWSER DOESN`T SUPPORT LOCALIZATION.</p>';
  };
  
  if('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(setPosition, showError);
  } else {
    notificationDom.style.display = 'block';
    notificationDom.innerHTML = '<p>BROWSER DOESN`T SUPPORT LOCALIZATION.</p>';
  }
  
  setInterval(() => { 
    if('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(setPosition, showError);
    } else {
      notificationDom.style.display = 'block';
      notificationDom.innerHTML = '<p>BROWSER DOESN`T SUPPORT LOCALIZATION.</p>';
    }
  }, 5000);
  
  //OPEN WEATHER API
  const api = {
    constValues: {
      KELVIN: 273,
      key: 'e69d6b961979bddc93a99fcc917017b3',
    }
  };
  
  //EMPTY WEATHER OBJ
  const weather = {};
  
  //GETTING WEATHER DATA FROM API BU COORDINATES
  const getWeather = (latitude=50.0422677, longitude=19.9561715) => {
    const apiEndPoint = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${api.constValues.key}`;
    
    fetch(apiEndPoint, {
      mode: 'cors', //no-cors, *cors, same-origin
    })
      .then(function(response) {
        const data = response.json();
        return data;
      })
      .then(function(data) {
        weather.icon = switchIcon(data.weather[0].icon);
        weather.temperature = Math.floor(data.main.temp - api.constValues.KELVIN);
        weather.wind = data.wind.speed; 
        weather.pressure = Math.floor(data.main.pressure);  
        weather.description = data.weather[0].description;
        weather.city = data.name;
        weather.country = data.sys.country;
      })
      .then(function() {     
        displayWeather();
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  
  //SETTING CORRECT ICON
  const switchIcon = (iconId) => {  
    //default icon
    let icon = '<i class="fas fa-sunny"></i>';
    //choosing correct icon
    switch (iconId) {
    case '01d':
      icon = '<i class="fas fa-sun"></i>';
      break;
    case '01n':
      icon = '<i class="fas fa-moon"></i>';
      break;
    case '02d':
    case '03d':
      icon = '<i class="fas fa-cloud-sun"></i>';
      break;
    case '02n':
    case '03n':
      icon = '<i class="fas fa-cloud-moon"></i>';
      break;
    case '04d':
    case '04n':
      icon = '<i class="fas fa-cloud"></i>';
      break;
    case '09d':
    case '09n':
      icon = '<i class="fas fa-cloud-showers-heavy"></i>';
      break;
    case '10d':
      icon = '<i class="fas fa-cloud-sun-rain"></i>';
      break;
    case '10n':
      icon = '<i class="fas fa-cloud-moon-rain"></i>';
      break;
    case '11d':
    case '11n':
      icon = '<i class="fas fa-poo-storm"></i>';
      break;
    case '13d':
    case '13n':
      icon = '<i class="far fa-snowflake"></i>';
      break;
    case '15d':
    case '15n':
      icon = '<i class="fas fa-smog"></i>';
      break;
    default:
      icon = '<i class="fas fa-cloud"></i>';
    }
    return icon;
  };
  
  //SETTING DATA TO DOM
  const displayWeather = () => {
    iconDom.innerHTML = weather.icon;
    tempDom.innerHTML = `${weather.temperature}<sup>o</sup>C`;
    presDom.innerHTML = `${weather.pressure}hPa`;
    windDom.innerHTML = `${weather.wind}m/s`;
    descDom.innerHTML = weather.description;
    locationDom.innerHTML = `${weather.city}, ${weather.country}`;
  }; 

};