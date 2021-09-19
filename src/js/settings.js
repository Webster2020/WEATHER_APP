export const select = {
  home: {
    coinButtons: '.coin-button',
    localWeatherTrigger: '.button-wrapper .weather-button',
    citiesFormTrigger: '.button-wrapper .charts-button',
    backHomeButton: '.nav-button-home'
  },
  localWeather: {
    page: '.local-weather-page',
    widget: '.local-weather-widget',
    notification: '.local-weather-widget .notification',
    wrapper: '.local-weather-widget .weather-wrapper',
    icon: '.local-weather-widget .weather-icon',
    temp: '.local-weather-widget .temperature-value p',
    pres: '.local-weather-widget .pressure-value p',
    wind: '.local-weather-widget .wind-speed-value p',
    desc: '.local-weather-widget .temperature-description p',
    location: '.local-weather-widget .location p',
    currentTime: '.local-weather-widget .current-time p'
  },
  citiesForm: {
    page: '.cities-form-page',
    widget: '.cities-form-widget',
    input: '#input-city',
    checkboxesWrapper: '#checkboxes',
    checkboxes: '#checkboxes input[type=checkbox]',
    firstCheckbox: '#checkboxes label:first-child',
    selectBox: '.cities-form-widget .select-box',
    addCityButton: '.cities-form-widget .add-city-button',
    showChartsButton: '.cities-form-widget .show-charts-button'
  },
  chartsWeather: {
    page: '.charts-weather-page',
    widget: '.charts-weather-widget'
  }
};

export const domElement = {
  home: {
    coinButtons: document.querySelectorAll(select.home.coinButtons),
    localWeatherTrigger: document.querySelector(select.home.localWeatherTrigger),
    citiesFormTrigger: document.querySelector(select.home.citiesFormTrigger),
    backHomeButton: document.querySelector(select.home.backHomeButton),
  },
  localWeather: {
    page: document.querySelector(select.localWeather.page),
    widget: document.querySelector(select.localWeather.widget),
    notification: document.querySelector(select.localWeather.notification),
    wrapper: document.querySelector(select.localWeather.wrapper),
    icon: document.querySelector(select.localWeather.icon),
    temp: document.querySelector(select.localWeather.temp),
    pres: document.querySelector(select.localWeather.pres),
    wind: document.querySelector(select.localWeather.wind),
    desc: document.querySelector(select.localWeather.desc),
    location: document.querySelector(select.localWeather.location),
    currentTime: document.querySelector(select.localWeather.currentTime)
  },
  citiesForm: {
    page: document.querySelector(select.citiesForm.page),
    widget: document.querySelector(select.citiesForm.widget),
    input: document.querySelector(select.citiesForm.input),
    checkboxesWrapper: document.querySelector(select.citiesForm.checkboxesWrapper),
    checkboxes: document.querySelectorAll(select.citiesForm.checkboxes),
    firstCheckbox: document.querySelector(select.citiesForm.firstCheckbox),
    selectBox: document.querySelector(select.citiesForm.selectBox),
    showChartsButton: document.querySelector(select.citiesForm.showChartsButton),
    addCityButton: document.querySelector(select.citiesForm.addCityButton),
  },
  chartsWeather: {
    page: document.querySelector(select.chartsWeather.page),
    widget: document.querySelector(select.chartsWeather.widget)
  }
};

export const classNames = {
  home: {
    elemGoBack: 'elem-go-back',
    elemGoAway: 'elem-go-away',
    elemHide: 'elem-hide',
    elemShow: 'elem-show',
    pageActive: 'active',
  },
  localWeather: {
    displayNotification: 'display-notification',
    hideWeather: 'hide-weather',
  }
};