function fetchForecast(location, days) {
  return new Promise((resolve, reject) => {
    resolve(
      fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=c2a982638cfd47eea3440339242402&q=${location}&days=${days}`,
        { mode: 'cors' },
      ),
    );

    // eslint-disable-next-line prefer-promise-reject-errors
    reject((error) => console.log(error));
  });
}

function getJSON(result) {
  const json = result.json();
  return json;
}

function getLocation(json) {
  const { country } = json.location;
  const { name } = json.location;
  const localTime = json.location.localtime.slice(-5);

  return { country, name, localTime };
}

function getCurrent(json) {
  const condition = json.current.condition.text;
  const tempC = json.current.temp_c;
  const tempF = json.current.temp_f;
  const feelsLikeC = json.current.feelslike_c;
  const feelsLikeF = json.current.feelslike_f;
  const { humidity } = json.current;
  const { uv } = json.current;
  const windDirection = json.current.wind_dir;
  const windKPH = json.current.wind_kph;
  const windMPH = json.current.wind_mph;

  return {
    condition, tempC, tempF, feelsLikeC, feelsLikeF, humidity, uv, windDirection, windKPH, windMPH,
  };
}

function getForecast(json) {
  function getDailyForecast(dayObj) {
    const { date } = dayObj;
    const condition = dayObj.day.condition.text;
    const getIcon = dayObj.day.condition.icon.slice(2);
    const icon = `https://${getIcon}`;
    const minTempC = dayObj.day.mintemp_c.toString().slice(0, 2);
    const maxTempC = dayObj.day.maxtemp_c.toString().slice(0, 2);
    const hourlyForecast = dayObj.hour;

    return {
      date, condition, icon, minTempC, maxTempC, hourlyForecast,
    };
  }

  function filterForecastDays(array) {
    for (let i = 0; i < array.length; i++) {
      const day = getDailyForecast(array[i]);

      array[i] = day;
    }
  }

  function reformatTime(date) {
    // eslint-disable-next-line prefer-template
    const timeString = new Date(date)
      .toLocaleTimeString('en-US', { hour12: true, hour: 'numeric' });

    return timeString;
  }

  function getHourlyForecast(hourObj) {
    const date = hourObj.time;
    const time = reformatTime(date).replace(/\s/g, '');
    const getIcon = hourObj.condition.icon.slice(2);
    const icon = `https://${getIcon}`;
    const tempC = hourObj.temp_c.toString().slice(0, 2);

    return {
      time, icon, tempC,
    };
  }

  function filterForecastHours(array) {
    for (let day = 0; day < 3; day++) {
      const hours = array[day].hourlyForecast;

      for (let i = 0; i < hours.length; i++) {
        const hour = getHourlyForecast(hours[i]);

        array[day].hourlyForecast[i] = hour;
      }
    }
  }

  const forecastDayArray = json.forecast.forecastday;

  filterForecastDays(forecastDayArray);
  filterForecastHours(forecastDayArray);

  return Object.assign(forecastDayArray);
}

async function processJSON(fetchData) {
  const json = await getJSON(fetchData);
  const location = getLocation(json);
  const current = getCurrent(json);
  const forecast = getForecast(json);

  return { location, current, forecast };
}

export {
  fetchForecast, processJSON,
};
