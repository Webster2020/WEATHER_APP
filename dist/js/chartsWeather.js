//OPEN WEATHER API
const api = {
  constValues: {
    KELVIN: 273,
    key: 'e69d6b961979bddc93a99fcc917017b3',
  }
};

const citiesWeather = {};

//GETTING WEATHER DATA FROM API BU ARRAY OF CITIES
export const renderCharts = (cities) => {
  const promises = [];
  for (let i = 0; i < cities.length; i++) {
    promises.push(fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=${api.constValues.key}`, {mode: 'cors'}));
  }
  Promise.all(promises)
    .then(function(allResponse) {
      const responses = [];
      for (let i = 0; i < allResponse.length; i++) {
        responses.push(allResponse[i].json());
      }
      return Promise.all(responses);
    })
    .then(function(allData) {
      const data = [];
      for (let i = 0; i < allData.length; i++) {
        data.push(allData[i].sys.country);
        //test
        citiesWeather[allData[i].name] = {
          name: allData[i].name,
          country: allData[i].sys.country,
          temp: Math.floor(allData[i].main.temp - api.constValues.KELVIN),
          tempMin: Math.floor(allData[i].main.temp_min - api.constValues.KELVIN),
          tempMax: Math.floor(allData[i].main.temp_max - api.constValues.KELVIN),
          tempDeg: 'o',
          tempUnit: 'C',
          wind: allData[i].wind.speed,
          windUnit: 'm/s',
          pressure: allData[i].main.pressure,
          pressureUnit: 'hPa',
          humidity: allData[i].main.humidity,
          humidityUnit: '%'
        };
      }
    })
    .then(function() {
      createTempChart(cities);
      createWindChart(cities);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};

// TEMP CHART CANVAS 
function createTempChart(cities) {
  const chartToRemove = document.querySelector('#tempChart');
  chartToRemove.remove();
  const newChartWrapper = document.querySelector('#temp-chart-wrapper');
  const chartNode = '<canvas class="chart" id="tempChart"></canvas>';
  newChartWrapper.innerHTML = chartNode;
  const ctx = document.getElementById('tempChart').getContext('2d');
  ctx.canvas.width = 300;
  ctx.canvas.height = 280;
  // eslint-disable-next-line no-undef
  const chart = new Chart(ctx, {
    // 1
    type: 'bar',
    options: {
      responsive: true,
      legend: {
        position: 'top',
      },
      hover: {
        mode: 'label'
      },
      scales: {
        xAxes: [{
          display: true,
        }],
        yAxes: [{
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Celsius degrees'
          },
          ticks: {
            //beginAtZero: true,
            min: (Math.min(...cities.map(city => citiesWeather[city].tempMin)) > 0 ? 0 : (Math.min(...cities.map(city => citiesWeather[city].tempMin)) + (Math.min(...cities.map(city => citiesWeather[city].tempMin)) % 10) - 20)),
            steps: 5,
            stepValue: 5,
            max: (Math.max(...cities.map(city => citiesWeather[city].tempMax)) - (Math.max(...cities.map(city => citiesWeather[city].tempMax)) % 10) + 20)
          }
        }]
      },
      title: {
        display: true,
        text: 'Temperature in chosen cities',
      }
    },
    data: {
      labels: cities,
      datasets: [{
        label: 'Min Temp',
        backgroundColor: '#8DBEC8',
        borderColor: '#8DBEC8',
        data: cities.map(city => citiesWeather[city].tempMin),
        hidden: true,
      },
      {
        label: 'Current Temp',
        backgroundColor: '#71B374',
        borderColor: '#71B374',
        data: cities.map(city => citiesWeather[city].temp),
      },
      {
        label: 'Max Temp',
        backgroundColor: '#F29E4E',
        borderColor: '#F29E4E',
        data: cities.map(city => citiesWeather[city].tempMax),
        hidden: true,
      }]
    },
  });
  console.log(chart);
}

// TEMP CHART CANVAS 
function createWindChart(cities) {
  const chartToRemove = document.querySelector('#windChart');
  chartToRemove.remove();
  const newChartWrapper = document.querySelector('#wind-chart-wrapper');
  const chartNode = '<canvas class="chart" id="windChart"></canvas>';
  newChartWrapper.innerHTML = chartNode;
  const ctx = document.getElementById('windChart').getContext('2d');
  ctx.canvas.width = 300;
  ctx.canvas.height = 280;
  // eslint-disable-next-line no-undef
  const chart = new Chart(ctx, {
    // 1
    type: 'bar',
    options: {
      responsive: true,
      legend: {
        position: 'top',
      },
      hover: {
        mode: 'label'
      },
      scales: {
        xAxes: [{
          display: true,
        }],
        yAxes: [{
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'meters per second'
          },
          ticks: {
            //beginAtZero: true,
            min: 0,
            steps: 5,
            stepValue: 5,
            max: (Math.max(...cities.map(city => citiesWeather[city].wind)) - (Math.max(...cities.map(city => citiesWeather[city].wind)) % 2) + 2)
          }
        }]
      },
      title: {
        display: true,
        text: 'Wind speed in chosen cities',
      }
    },
    data: {
      labels: cities,
      datasets: [{
        label: 'Wind speed',
        backgroundColor: '#8DBEC8',
        borderColor: '#8DBEC8',
        data: cities.map(city => citiesWeather[city].wind),
        hidden: false,
      }]
    },
  });
  console.log(chart);
}
