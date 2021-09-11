export const select = {
  home: {
    coinButtons: '.coin-button',
    localWeatherTrigger: '.button-wrapper .weather-button',
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
    location: '.local-weather-widget .location p'
  },
  chartsWeather: {}
}

export const domElement = {
  home: {
    coinButtons: document.querySelectorAll(select.home.coinButtons),
    localWeatherTrigger: document.querySelector(select.home.localWeatherTrigger),
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
    location: document.querySelector(select.localWeather.location)
  },
  chartsWeather: {}
}

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