# WEATHER APP

WEATHER APP is simple aplication to checking weather uses external API to fetch data.

## How it works
![](WEATHER_APP.gif)

## Link
https://weatherapp.webster2020.com/

## Getting Started

1. git clone git@github.com:Webster2020/WEATHER_APP.git
2. npm run install
3. npm run watch - run the project and than You can see it on Your device

*...or use link if You only want to check how it works

## Used technologies:

 1. Vanilla JS
 2. SCSS for styling
 3. HTML5 for content
 4. Canvas Chart to shows data 
 5. Eslint to control bugs

## Implemented solutions:

  ** LOCAL WEATHER: **
  - if localization in browser is available it shows weather parameters of current place and time
  ** WEATHER ON CHARTS: **
  - form to selecting cities to show weather
  - when data are correct it shows charts with temperature and wind speed on charts

## Project architecture

 1. content in index.html file
 2. styles in scss files - general file with import styles from partials
 3. charts by canvas
 4. JS files divided into:
  - app.js - main file
  - home.js - functions to coin buttons and back button
  - localWeather.js - functions to getting data from API and display weather info
  - citiesForm.js - form to selecting and getting cities from API
  - chartsWeather.js - functions to getting data from API and display weather info on charts
  - settings.js - select, class and DOM elemenst objects
 5. configuration files: gitignore, package.json, stylelintrc etc.
 6. no images and vendors in this moment

## How did I create this project?

Project was prepared based on my own idea and using my current knowledge and skills.

## Plan for future development

 - Refactor code

## Authors

* **Michal Szwajgier** - *Webster2020* - 

## License
Free licence
