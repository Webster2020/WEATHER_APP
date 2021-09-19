'use strict';

import {domElement, classNames} from './settings.js';

//GET ELEMENTS
const citiesFormPage = domElement.citiesForm.page;
const citiesFormWidget = domElement.citiesForm.widget;

const inputCityDom = domElement.citiesForm.input;
const checkboxesWrapperDom = domElement.citiesForm.checkboxesWrapper;
const firstCheckboxDom = domElement.citiesForm.firstCheckbox;
const selectBoxDom = domElement.citiesForm.selectBox;
const addCityButtonDom = domElement.citiesForm.addCityButton;

const showChartsButtonDom = domElement.citiesForm.showChartsButton;

const chartsWeatherPage = domElement.chartsWeather.page;
const chartsWeatherWidget = domElement.chartsWeather.widget;

//OPEN WEATHER API
const api = {
  constValues: {
    KELVIN: 273,
    key: 'e69d6b961979bddc93a99fcc917017b3',
  }
};

//EMPTY CITIES WEATHER DATA OBJ
const cities = [];
//const citiesWeather = {};

export const initCitiesForm = () => {
  //CHECKING EXISTING CITY IN API DATABASE 
  function checkCityExisting(city='Losndon') {
    let apiEndPoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api.constValues.key}`;
    
    fetch(apiEndPoint, {
      mode: 'cors', //no-cors, *cors, same-origin
    })
      .then(function(response) {
        let data = response.json();
        return data;
      })
      .then(function(data) {  
        if (data.message) {
          alert(`We do not have weather info about "${city}".`);
        } else {
          const checkboxes = document.querySelectorAll('#checkboxes input[type=checkbox]');
          let isAlreadyCity = false;
          console.log(isAlreadyCity);
          for (const checkbox of checkboxes) {
            if (checkbox.value == city) {
              console.log(checkbox.value);
              console.log(city);
              alert(`${city} is already on the list!`);
              isAlreadyCity = true;
            }
          }
          if (!isAlreadyCity) {
            uncheckAllCities();
            alert(`"${city}" correct added to cities list.`);
            const firstCity = firstCheckboxDom;
            firstCity.insertAdjacentHTML('beforebegin', `<label for="${city}"><input type="checkbox" id="${city}" class='single-city' value="${city}"/>${city}</label>`);
            countCheckedCities();
          }
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  
  const checkboxes = document.querySelectorAll('#checkboxes input[type=checkbox]');
  for (const checkbox of checkboxes) {
    checkbox.checked = false;
  }
  
  //MULTISELECT
  let expanded = false;
  const selectBox = selectBoxDom;
  selectBox.addEventListener('click', showCheckboxes);
  
  function showCheckboxes() {
    const checkboxes = checkboxesWrapperDom;
    if (!expanded) {
      checkboxes.style.display = 'block';
      expanded = true;
    } else {
      checkboxes.style.display = 'none';
      expanded = false;
    }
  }
  
  const showChartsButton = showChartsButtonDom;
  showChartsButton.addEventListener('click', function(e) {
    e.preventDefault();
    console.log('BEFORE');
    console.log(cities);
    const allCitiesOnList = document.querySelectorAll('#checkboxes input[type=checkbox]');

    for (const city of allCitiesOnList) {
      if (city.checked && !cities.includes(city.value)) {
        cities.push(city.value);
      } else if (!city.checked && cities.includes(city.value)) {
        cities.splice(cities.indexOf(city.value), 1);
      }
    }
    console.log('AFTER');
    console.log(cities);

    citiesFormWidget.classList.remove(classNames.home.elemGoBack);
    citiesFormWidget.classList.remove(classNames.home.elemShow);

    citiesFormWidget.classList.add(classNames.home.elemGoAway);
    citiesFormWidget.classList.add(classNames.home.elemHide);
    setTimeout(function(){
      citiesFormPage.classList.remove(classNames.home.pageActive);
    }, 500);
    
    chartsWeatherPage.classList.add(classNames.home.pageActive);
    chartsWeatherWidget.classList.add(classNames.home.elemGoBack);
    chartsWeatherWidget.classList.add(classNames.home.elemShow);
    //renderCharts(cities);
  });
  
  //ADD CITY
  const addCityButton = addCityButtonDom;
  addCityButton.addEventListener('click', function(e) {
    e.preventDefault();
    const inputCity = inputCityDom;
    checkCityExisting(inputCity.value);
  });
  
  function countCheckedCities() {
    let counter = 0;
    const checkboxes = document.querySelectorAll('#checkboxes input[type=checkbox]');
    for (const checkbox of checkboxes) {
      checkbox.addEventListener('change', function() {
        if (this.checked) {
          counter++;
          console.log(counter);
          counter < 6 ? console.log('STILL OK ;) ') : console.log('TO MUCH :( )');
        } else {
          counter--;
          console.log(counter);
          counter < 6 ? console.log('STILL OK ;) ') : console.log('TO MUCH :( )');
        }
      });
    }
  }
  
  //UNCHECK ALL
  function uncheckAllCities() {
    const checkboxes = document.querySelectorAll('#checkboxes input[type=checkbox]');
    for (const checkbox of checkboxes) {
      checkbox.checked = false;
    }
  }
};
