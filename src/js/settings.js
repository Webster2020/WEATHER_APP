export const select = {
  home: {
    coinButtons: '.coin-button',
    localWeatherTrigger: '.button-wrapper .weather-button',
    backHomeButton: '.nav-button-home'
  },
  localWeather: {
    localWeatherPage: '.local-weather-page',
    localWeatherWidget: '.local-weather-widget'
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
    localWeatherPage: document.querySelector(select.localWeather.localWeatherPage),
    localWeatherWidget: document.querySelector(select.localWeather.localWeatherWidget)
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
};