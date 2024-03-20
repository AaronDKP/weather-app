/* eslint-disable no-plusplus */
function updateCurrentContainer(json) {
  const currentLocation = document.getElementById('currentLocation');
  const currentTemp = document.getElementById('currentTemp');
  const currentCondition = document.getElementById('currentCondition');
  const currentHiLo = document.getElementById('currentHiLo');

  const jsonLocation = json.location.name;
  const jsonTempC = json.current.tempC;
  const jsonCondition = json.current.condition;

  const jsonLoC = json.forecast[0].minTempC;
  const jsonHiC = json.forecast[0].maxTempC;

  const jsonHiLoC = `H:${jsonHiC}° L:${jsonLoC}°`;

  currentLocation.textContent = jsonLocation;
  currentTemp.textContent = `${jsonTempC}°`;
  currentCondition.textContent = jsonCondition;
  currentHiLo.textContent = jsonHiLoC;
}

function generateHour() {
  const hourlyForecastContainer = document.getElementById('hourlyForecastContainer');
  const hourlyForecast = document.createElement('div');
  const hourlyHour = document.createElement('div');
  const hourlyIcon = document.createElement('div');
  const hourlyTemp = document.createElement('div');
  const img = new Image();

  hourlyHour.className = 'hourlyHour';
  hourlyIcon.className = 'hourlyIcon';
  hourlyIcon.appendChild(img);
  hourlyTemp.className = 'hourlyTemp';
  hourlyForecast.appendChild(hourlyHour);
  hourlyForecast.appendChild(hourlyIcon);
  hourlyForecast.appendChild(hourlyTemp);
  hourlyForecast.className = 'hourlyForecast';

  hourlyForecastContainer.appendChild(hourlyForecast);
}

function clearHourlyForecast(parentNode) {
  parentNode.innerHTML = '';
}

function generateHourlyForecast() {
  const hourlyForecastContainer = document.getElementById('hourlyForecastContainer');

  clearHourlyForecast(hourlyForecastContainer);

  for (let i = 0; i < 24; i++) {
    generateHour();
  }
}

async function updateHourlyForecast(json) {
  const currentTime = new Date().getHours();
  const currentHourForecast = json.forecast[0].hourlyForecast[currentTime];

  await generateHourlyForecast();

  const hourlyForecastContainer = document.getElementById('hourlyForecastContainer');
  const hourlyElementArray = [...hourlyForecastContainer.children];

  hourlyElementArray[0].children[0].textContent = 'Now';
  hourlyElementArray[0].children[1].children[0].src = currentHourForecast.icon;
  hourlyElementArray[0].children[2].textContent = `${currentHourForecast.tempC}°`;

  const remainingHours = (24 - currentTime);
  let time = currentTime;

  for (let i = 1; i < remainingHours; i++) {
    const thisHourForecast = json.forecast[0].hourlyForecast[time += 1];

    hourlyElementArray[i].children[0].textContent = thisHourForecast.time;
    hourlyElementArray[i].children[1].children[0].src = thisHourForecast.icon;
    hourlyElementArray[i].children[2].textContent = `${thisHourForecast.tempC}°`;
  }

  let nextDay = remainingHours;

  for (let i = 0; i < currentTime; i++) {
    const thisHourForecast = json.forecast[1].hourlyForecast[i];

    hourlyElementArray[nextDay].children[0].textContent = thisHourForecast.time;
    hourlyElementArray[nextDay].children[1].children[0].src = thisHourForecast.icon;
    hourlyElementArray[nextDay].children[2].textContent = `${thisHourForecast.tempC}°`;

    nextDay += 1;
  }
}

function updateHourContainer(json) {
  const hourCondition = document.getElementById('hourCondition');

  const jsonCondition = json.forecast[0].condition;

  hourCondition.textContent = `${jsonCondition} throughout the day`;

  updateHourlyForecast(json);
}

function getDayName(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { weekday: 'short' });
}

function updateDailyContainer(json) {
  const dailyForecastContainer = document.getElementById('dailyForecastContainer');
  const dailyElementArray = [...dailyForecastContainer.children];

  for (let i = 0; i < 3; i++) {
    const { date } = json.forecast[i];
    const day = getDayName(date);

    const min = json.forecast[i].minTempC;
    const max = json.forecast[i].maxTempC;

    dailyElementArray[i].children[0].textContent = day;
    dailyElementArray[i].children[1].children[0].src = json.forecast[i].icon;
    dailyElementArray[i].children[2].textContent = `${min}°`;
    dailyElementArray[i].children[4].textContent = `${max}°`;
  }

  dailyElementArray[0].children[0].textContent = 'Today';
}

function updateGUI(json) {
  updateCurrentContainer(json);
  updateHourContainer(json);
  updateDailyContainer(json);
}

export { updateGUI };
