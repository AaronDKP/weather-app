/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/fetchForecast.js":
/*!**************************************!*\
  !*** ./src/modules/fetchForecast.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchForecast: () => (/* binding */ fetchForecast),
/* harmony export */   processJSON: () => (/* binding */ processJSON)
/* harmony export */ });
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




/***/ }),

/***/ "./src/modules/showForecast.js":
/*!*************************************!*\
  !*** ./src/modules/showForecast.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateGUI: () => (/* binding */ updateGUI)
/* harmony export */ });
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




/***/ }),

/***/ "./src/modules/userInputs.js":
/*!***********************************!*\
  !*** ./src/modules/userInputs.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getLocation: () => (/* binding */ getLocation)
/* harmony export */ });
function getLocation() {
  const newLocation = document.getElementById('locationInput').value;
  return newLocation;
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_fetchForecast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/fetchForecast */ "./src/modules/fetchForecast.js");
/* harmony import */ var _modules_userInputs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/userInputs */ "./src/modules/userInputs.js");
/* harmony import */ var _modules_showForecast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/showForecast */ "./src/modules/showForecast.js");






window.onload = () => {
  const fetch = Promise.resolve((0,_modules_fetchForecast__WEBPACK_IMPORTED_MODULE_0__.fetchForecast)('brisbane', '3'));

  fetch.then((result) => (0,_modules_fetchForecast__WEBPACK_IMPORTED_MODULE_0__.processJSON)(result))
    // .then((result) => console.log(result))
    .then((result) => (0,_modules_showForecast__WEBPACK_IMPORTED_MODULE_2__.updateGUI)(result));
};

const submitBtn = document.getElementById('locationSubmit');
const locationInput = document.getElementById('locationInput');

submitBtn.addEventListener('click', () => {
  const newLocation = (0,_modules_userInputs__WEBPACK_IMPORTED_MODULE_1__.getLocation)();

  const fetch = Promise.resolve((0,_modules_fetchForecast__WEBPACK_IMPORTED_MODULE_0__.fetchForecast)(newLocation, '3'));

  fetch.then((result) => (0,_modules_fetchForecast__WEBPACK_IMPORTED_MODULE_0__.processJSON)(result))
    .then((result) => (0,_modules_showForecast__WEBPACK_IMPORTED_MODULE_2__.updateGUI)(result));
});

locationInput.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    const newLocation = (0,_modules_userInputs__WEBPACK_IMPORTED_MODULE_1__.getLocation)();

    const fetch = Promise.resolve((0,_modules_fetchForecast__WEBPACK_IMPORTED_MODULE_0__.fetchForecast)(newLocation, '3'));

    fetch.then((result) => (0,_modules_fetchForecast__WEBPACK_IMPORTED_MODULE_0__.processJSON)(result))
      .then((result) => (0,_modules_showForecast__WEBPACK_IMPORTED_MODULE_2__.updateGUI)(result));
  }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qzs7QUFFa0I7O0FBRUE7O0FBRW5EO0FBQ0EsZ0NBQWdDLHFFQUFhOztBQUU3Qyx5QkFBeUIsbUVBQVc7QUFDcEM7QUFDQSxzQkFBc0IsZ0VBQVM7QUFDL0I7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQixnRUFBVzs7QUFFakMsZ0NBQWdDLHFFQUFhOztBQUU3Qyx5QkFBeUIsbUVBQVc7QUFDcEMsc0JBQXNCLGdFQUFTO0FBQy9CLENBQUM7O0FBRUQ7QUFDQTtBQUNBLHdCQUF3QixnRUFBVzs7QUFFbkMsa0NBQWtDLHFFQUFhOztBQUUvQywyQkFBMkIsbUVBQVc7QUFDdEMsd0JBQXdCLGdFQUFTO0FBQ2pDO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvZmV0Y2hGb3JlY2FzdC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL3Nob3dGb3JlY2FzdC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL3VzZXJJbnB1dHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBmZXRjaEZvcmVjYXN0KGxvY2F0aW9uLCBkYXlzKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgcmVzb2x2ZShcbiAgICAgIGZldGNoKFxuICAgICAgICBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9YzJhOTgyNjM4Y2ZkNDdlZWEzNDQwMzM5MjQyNDAyJnE9JHtsb2NhdGlvbn0mZGF5cz0ke2RheXN9YCxcbiAgICAgICAgeyBtb2RlOiAnY29ycycgfSxcbiAgICAgICksXG4gICAgKTtcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItcHJvbWlzZS1yZWplY3QtZXJyb3JzXG4gICAgcmVqZWN0KChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldEpTT04ocmVzdWx0KSB7XG4gIGNvbnN0IGpzb24gPSByZXN1bHQuanNvbigpO1xuICByZXR1cm4ganNvbjtcbn1cblxuZnVuY3Rpb24gZ2V0TG9jYXRpb24oanNvbikge1xuICBjb25zdCB7IGNvdW50cnkgfSA9IGpzb24ubG9jYXRpb247XG4gIGNvbnN0IHsgbmFtZSB9ID0ganNvbi5sb2NhdGlvbjtcbiAgY29uc3QgbG9jYWxUaW1lID0ganNvbi5sb2NhdGlvbi5sb2NhbHRpbWUuc2xpY2UoLTUpO1xuXG4gIHJldHVybiB7IGNvdW50cnksIG5hbWUsIGxvY2FsVGltZSB9O1xufVxuXG5mdW5jdGlvbiBnZXRDdXJyZW50KGpzb24pIHtcbiAgY29uc3QgY29uZGl0aW9uID0ganNvbi5jdXJyZW50LmNvbmRpdGlvbi50ZXh0O1xuICBjb25zdCB0ZW1wQyA9IGpzb24uY3VycmVudC50ZW1wX2M7XG4gIGNvbnN0IHRlbXBGID0ganNvbi5jdXJyZW50LnRlbXBfZjtcbiAgY29uc3QgZmVlbHNMaWtlQyA9IGpzb24uY3VycmVudC5mZWVsc2xpa2VfYztcbiAgY29uc3QgZmVlbHNMaWtlRiA9IGpzb24uY3VycmVudC5mZWVsc2xpa2VfZjtcbiAgY29uc3QgeyBodW1pZGl0eSB9ID0ganNvbi5jdXJyZW50O1xuICBjb25zdCB7IHV2IH0gPSBqc29uLmN1cnJlbnQ7XG4gIGNvbnN0IHdpbmREaXJlY3Rpb24gPSBqc29uLmN1cnJlbnQud2luZF9kaXI7XG4gIGNvbnN0IHdpbmRLUEggPSBqc29uLmN1cnJlbnQud2luZF9rcGg7XG4gIGNvbnN0IHdpbmRNUEggPSBqc29uLmN1cnJlbnQud2luZF9tcGg7XG5cbiAgcmV0dXJuIHtcbiAgICBjb25kaXRpb24sIHRlbXBDLCB0ZW1wRiwgZmVlbHNMaWtlQywgZmVlbHNMaWtlRiwgaHVtaWRpdHksIHV2LCB3aW5kRGlyZWN0aW9uLCB3aW5kS1BILCB3aW5kTVBILFxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRGb3JlY2FzdChqc29uKSB7XG4gIGZ1bmN0aW9uIGdldERhaWx5Rm9yZWNhc3QoZGF5T2JqKSB7XG4gICAgY29uc3QgeyBkYXRlIH0gPSBkYXlPYmo7XG4gICAgY29uc3QgY29uZGl0aW9uID0gZGF5T2JqLmRheS5jb25kaXRpb24udGV4dDtcbiAgICBjb25zdCBnZXRJY29uID0gZGF5T2JqLmRheS5jb25kaXRpb24uaWNvbi5zbGljZSgyKTtcbiAgICBjb25zdCBpY29uID0gYGh0dHBzOi8vJHtnZXRJY29ufWA7XG4gICAgY29uc3QgbWluVGVtcEMgPSBkYXlPYmouZGF5Lm1pbnRlbXBfYy50b1N0cmluZygpLnNsaWNlKDAsIDIpO1xuICAgIGNvbnN0IG1heFRlbXBDID0gZGF5T2JqLmRheS5tYXh0ZW1wX2MudG9TdHJpbmcoKS5zbGljZSgwLCAyKTtcbiAgICBjb25zdCBob3VybHlGb3JlY2FzdCA9IGRheU9iai5ob3VyO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGUsIGNvbmRpdGlvbiwgaWNvbiwgbWluVGVtcEMsIG1heFRlbXBDLCBob3VybHlGb3JlY2FzdCxcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gZmlsdGVyRm9yZWNhc3REYXlzKGFycmF5KSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgZGF5ID0gZ2V0RGFpbHlGb3JlY2FzdChhcnJheVtpXSk7XG5cbiAgICAgIGFycmF5W2ldID0gZGF5O1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlZm9ybWF0VGltZShkYXRlKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci10ZW1wbGF0ZVxuICAgIGNvbnN0IHRpbWVTdHJpbmcgPSBuZXcgRGF0ZShkYXRlKVxuICAgICAgLnRvTG9jYWxlVGltZVN0cmluZygnZW4tVVMnLCB7IGhvdXIxMjogdHJ1ZSwgaG91cjogJ251bWVyaWMnIH0pO1xuXG4gICAgcmV0dXJuIHRpbWVTdHJpbmc7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRIb3VybHlGb3JlY2FzdChob3VyT2JqKSB7XG4gICAgY29uc3QgZGF0ZSA9IGhvdXJPYmoudGltZTtcbiAgICBjb25zdCB0aW1lID0gcmVmb3JtYXRUaW1lKGRhdGUpLnJlcGxhY2UoL1xccy9nLCAnJyk7XG4gICAgY29uc3QgZ2V0SWNvbiA9IGhvdXJPYmouY29uZGl0aW9uLmljb24uc2xpY2UoMik7XG4gICAgY29uc3QgaWNvbiA9IGBodHRwczovLyR7Z2V0SWNvbn1gO1xuICAgIGNvbnN0IHRlbXBDID0gaG91ck9iai50ZW1wX2MudG9TdHJpbmcoKS5zbGljZSgwLCAyKTtcblxuICAgIHJldHVybiB7XG4gICAgICB0aW1lLCBpY29uLCB0ZW1wQyxcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gZmlsdGVyRm9yZWNhc3RIb3VycyhhcnJheSkge1xuICAgIGZvciAobGV0IGRheSA9IDA7IGRheSA8IDM7IGRheSsrKSB7XG4gICAgICBjb25zdCBob3VycyA9IGFycmF5W2RheV0uaG91cmx5Rm9yZWNhc3Q7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaG91cnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgaG91ciA9IGdldEhvdXJseUZvcmVjYXN0KGhvdXJzW2ldKTtcblxuICAgICAgICBhcnJheVtkYXldLmhvdXJseUZvcmVjYXN0W2ldID0gaG91cjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBmb3JlY2FzdERheUFycmF5ID0ganNvbi5mb3JlY2FzdC5mb3JlY2FzdGRheTtcblxuICBmaWx0ZXJGb3JlY2FzdERheXMoZm9yZWNhc3REYXlBcnJheSk7XG4gIGZpbHRlckZvcmVjYXN0SG91cnMoZm9yZWNhc3REYXlBcnJheSk7XG5cbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oZm9yZWNhc3REYXlBcnJheSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHByb2Nlc3NKU09OKGZldGNoRGF0YSkge1xuICBjb25zdCBqc29uID0gYXdhaXQgZ2V0SlNPTihmZXRjaERhdGEpO1xuICBjb25zdCBsb2NhdGlvbiA9IGdldExvY2F0aW9uKGpzb24pO1xuICBjb25zdCBjdXJyZW50ID0gZ2V0Q3VycmVudChqc29uKTtcbiAgY29uc3QgZm9yZWNhc3QgPSBnZXRGb3JlY2FzdChqc29uKTtcblxuICByZXR1cm4geyBsb2NhdGlvbiwgY3VycmVudCwgZm9yZWNhc3QgfTtcbn1cblxuZXhwb3J0IHtcbiAgZmV0Y2hGb3JlY2FzdCwgcHJvY2Vzc0pTT04sXG59O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cbmZ1bmN0aW9uIHVwZGF0ZUN1cnJlbnRDb250YWluZXIoanNvbikge1xuICBjb25zdCBjdXJyZW50TG9jYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudExvY2F0aW9uJyk7XG4gIGNvbnN0IGN1cnJlbnRUZW1wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnRUZW1wJyk7XG4gIGNvbnN0IGN1cnJlbnRDb25kaXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudENvbmRpdGlvbicpO1xuICBjb25zdCBjdXJyZW50SGlMbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50SGlMbycpO1xuXG4gIGNvbnN0IGpzb25Mb2NhdGlvbiA9IGpzb24ubG9jYXRpb24ubmFtZTtcbiAgY29uc3QganNvblRlbXBDID0ganNvbi5jdXJyZW50LnRlbXBDO1xuICBjb25zdCBqc29uQ29uZGl0aW9uID0ganNvbi5jdXJyZW50LmNvbmRpdGlvbjtcblxuICBjb25zdCBqc29uTG9DID0ganNvbi5mb3JlY2FzdFswXS5taW5UZW1wQztcbiAgY29uc3QganNvbkhpQyA9IGpzb24uZm9yZWNhc3RbMF0ubWF4VGVtcEM7XG5cbiAgY29uc3QganNvbkhpTG9DID0gYEg6JHtqc29uSGlDfcKwIEw6JHtqc29uTG9DfcKwYDtcblxuICBjdXJyZW50TG9jYXRpb24udGV4dENvbnRlbnQgPSBqc29uTG9jYXRpb247XG4gIGN1cnJlbnRUZW1wLnRleHRDb250ZW50ID0gYCR7anNvblRlbXBDfcKwYDtcbiAgY3VycmVudENvbmRpdGlvbi50ZXh0Q29udGVudCA9IGpzb25Db25kaXRpb247XG4gIGN1cnJlbnRIaUxvLnRleHRDb250ZW50ID0ganNvbkhpTG9DO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUhvdXIoKSB7XG4gIGNvbnN0IGhvdXJseUZvcmVjYXN0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvdXJseUZvcmVjYXN0Q29udGFpbmVyJyk7XG4gIGNvbnN0IGhvdXJseUZvcmVjYXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGhvdXJseUhvdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgaG91cmx5SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBob3VybHlUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuXG4gIGhvdXJseUhvdXIuY2xhc3NOYW1lID0gJ2hvdXJseUhvdXInO1xuICBob3VybHlJY29uLmNsYXNzTmFtZSA9ICdob3VybHlJY29uJztcbiAgaG91cmx5SWNvbi5hcHBlbmRDaGlsZChpbWcpO1xuICBob3VybHlUZW1wLmNsYXNzTmFtZSA9ICdob3VybHlUZW1wJztcbiAgaG91cmx5Rm9yZWNhc3QuYXBwZW5kQ2hpbGQoaG91cmx5SG91cik7XG4gIGhvdXJseUZvcmVjYXN0LmFwcGVuZENoaWxkKGhvdXJseUljb24pO1xuICBob3VybHlGb3JlY2FzdC5hcHBlbmRDaGlsZChob3VybHlUZW1wKTtcbiAgaG91cmx5Rm9yZWNhc3QuY2xhc3NOYW1lID0gJ2hvdXJseUZvcmVjYXN0JztcblxuICBob3VybHlGb3JlY2FzdENvbnRhaW5lci5hcHBlbmRDaGlsZChob3VybHlGb3JlY2FzdCk7XG59XG5cbmZ1bmN0aW9uIGNsZWFySG91cmx5Rm9yZWNhc3QocGFyZW50Tm9kZSkge1xuICBwYXJlbnROb2RlLmlubmVySFRNTCA9ICcnO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUhvdXJseUZvcmVjYXN0KCkge1xuICBjb25zdCBob3VybHlGb3JlY2FzdENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob3VybHlGb3JlY2FzdENvbnRhaW5lcicpO1xuXG4gIGNsZWFySG91cmx5Rm9yZWNhc3QoaG91cmx5Rm9yZWNhc3RDb250YWluZXIpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMjQ7IGkrKykge1xuICAgIGdlbmVyYXRlSG91cigpO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUhvdXJseUZvcmVjYXN0KGpzb24pIHtcbiAgY29uc3QgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpLmdldEhvdXJzKCk7XG4gIGNvbnN0IGN1cnJlbnRIb3VyRm9yZWNhc3QgPSBqc29uLmZvcmVjYXN0WzBdLmhvdXJseUZvcmVjYXN0W2N1cnJlbnRUaW1lXTtcblxuICBhd2FpdCBnZW5lcmF0ZUhvdXJseUZvcmVjYXN0KCk7XG5cbiAgY29uc3QgaG91cmx5Rm9yZWNhc3RDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG91cmx5Rm9yZWNhc3RDb250YWluZXInKTtcbiAgY29uc3QgaG91cmx5RWxlbWVudEFycmF5ID0gWy4uLmhvdXJseUZvcmVjYXN0Q29udGFpbmVyLmNoaWxkcmVuXTtcblxuICBob3VybHlFbGVtZW50QXJyYXlbMF0uY2hpbGRyZW5bMF0udGV4dENvbnRlbnQgPSAnTm93JztcbiAgaG91cmx5RWxlbWVudEFycmF5WzBdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLnNyYyA9IGN1cnJlbnRIb3VyRm9yZWNhc3QuaWNvbjtcbiAgaG91cmx5RWxlbWVudEFycmF5WzBdLmNoaWxkcmVuWzJdLnRleHRDb250ZW50ID0gYCR7Y3VycmVudEhvdXJGb3JlY2FzdC50ZW1wQ33CsGA7XG5cbiAgY29uc3QgcmVtYWluaW5nSG91cnMgPSAoMjQgLSBjdXJyZW50VGltZSk7XG4gIGxldCB0aW1lID0gY3VycmVudFRpbWU7XG5cbiAgZm9yIChsZXQgaSA9IDE7IGkgPCByZW1haW5pbmdIb3VyczsgaSsrKSB7XG4gICAgY29uc3QgdGhpc0hvdXJGb3JlY2FzdCA9IGpzb24uZm9yZWNhc3RbMF0uaG91cmx5Rm9yZWNhc3RbdGltZSArPSAxXTtcblxuICAgIGhvdXJseUVsZW1lbnRBcnJheVtpXS5jaGlsZHJlblswXS50ZXh0Q29udGVudCA9IHRoaXNIb3VyRm9yZWNhc3QudGltZTtcbiAgICBob3VybHlFbGVtZW50QXJyYXlbaV0uY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0uc3JjID0gdGhpc0hvdXJGb3JlY2FzdC5pY29uO1xuICAgIGhvdXJseUVsZW1lbnRBcnJheVtpXS5jaGlsZHJlblsyXS50ZXh0Q29udGVudCA9IGAke3RoaXNIb3VyRm9yZWNhc3QudGVtcEN9wrBgO1xuICB9XG5cbiAgbGV0IG5leHREYXkgPSByZW1haW5pbmdIb3VycztcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRUaW1lOyBpKyspIHtcbiAgICBjb25zdCB0aGlzSG91ckZvcmVjYXN0ID0ganNvbi5mb3JlY2FzdFsxXS5ob3VybHlGb3JlY2FzdFtpXTtcblxuICAgIGhvdXJseUVsZW1lbnRBcnJheVtuZXh0RGF5XS5jaGlsZHJlblswXS50ZXh0Q29udGVudCA9IHRoaXNIb3VyRm9yZWNhc3QudGltZTtcbiAgICBob3VybHlFbGVtZW50QXJyYXlbbmV4dERheV0uY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0uc3JjID0gdGhpc0hvdXJGb3JlY2FzdC5pY29uO1xuICAgIGhvdXJseUVsZW1lbnRBcnJheVtuZXh0RGF5XS5jaGlsZHJlblsyXS50ZXh0Q29udGVudCA9IGAke3RoaXNIb3VyRm9yZWNhc3QudGVtcEN9wrBgO1xuXG4gICAgbmV4dERheSArPSAxO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUhvdXJDb250YWluZXIoanNvbikge1xuICBjb25zdCBob3VyQ29uZGl0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvdXJDb25kaXRpb24nKTtcblxuICBjb25zdCBqc29uQ29uZGl0aW9uID0ganNvbi5mb3JlY2FzdFswXS5jb25kaXRpb247XG5cbiAgaG91ckNvbmRpdGlvbi50ZXh0Q29udGVudCA9IGAke2pzb25Db25kaXRpb259IHRocm91Z2hvdXQgdGhlIGRheWA7XG5cbiAgdXBkYXRlSG91cmx5Rm9yZWNhc3QoanNvbik7XG59XG5cbmZ1bmN0aW9uIGdldERheU5hbWUoZGF0ZVN0cmluZykge1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUoZGF0ZVN0cmluZyk7XG4gIHJldHVybiBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygnZW4tVVMnLCB7IHdlZWtkYXk6ICdzaG9ydCcgfSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZURhaWx5Q29udGFpbmVyKGpzb24pIHtcbiAgY29uc3QgZGFpbHlGb3JlY2FzdENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYWlseUZvcmVjYXN0Q29udGFpbmVyJyk7XG4gIGNvbnN0IGRhaWx5RWxlbWVudEFycmF5ID0gWy4uLmRhaWx5Rm9yZWNhc3RDb250YWluZXIuY2hpbGRyZW5dO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgY29uc3QgeyBkYXRlIH0gPSBqc29uLmZvcmVjYXN0W2ldO1xuICAgIGNvbnN0IGRheSA9IGdldERheU5hbWUoZGF0ZSk7XG5cbiAgICBjb25zdCBtaW4gPSBqc29uLmZvcmVjYXN0W2ldLm1pblRlbXBDO1xuICAgIGNvbnN0IG1heCA9IGpzb24uZm9yZWNhc3RbaV0ubWF4VGVtcEM7XG5cbiAgICBkYWlseUVsZW1lbnRBcnJheVtpXS5jaGlsZHJlblswXS50ZXh0Q29udGVudCA9IGRheTtcbiAgICBkYWlseUVsZW1lbnRBcnJheVtpXS5jaGlsZHJlblsxXS5jaGlsZHJlblswXS5zcmMgPSBqc29uLmZvcmVjYXN0W2ldLmljb247XG4gICAgZGFpbHlFbGVtZW50QXJyYXlbaV0uY2hpbGRyZW5bMl0udGV4dENvbnRlbnQgPSBgJHttaW59wrBgO1xuICAgIGRhaWx5RWxlbWVudEFycmF5W2ldLmNoaWxkcmVuWzRdLnRleHRDb250ZW50ID0gYCR7bWF4fcKwYDtcbiAgfVxuXG4gIGRhaWx5RWxlbWVudEFycmF5WzBdLmNoaWxkcmVuWzBdLnRleHRDb250ZW50ID0gJ1RvZGF5Jztcbn1cblxuZnVuY3Rpb24gdXBkYXRlR1VJKGpzb24pIHtcbiAgdXBkYXRlQ3VycmVudENvbnRhaW5lcihqc29uKTtcbiAgdXBkYXRlSG91ckNvbnRhaW5lcihqc29uKTtcbiAgdXBkYXRlRGFpbHlDb250YWluZXIoanNvbik7XG59XG5cbmV4cG9ydCB7IHVwZGF0ZUdVSSB9O1xuIiwiZnVuY3Rpb24gZ2V0TG9jYXRpb24oKSB7XG4gIGNvbnN0IG5ld0xvY2F0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvY2F0aW9uSW5wdXQnKS52YWx1ZTtcbiAgcmV0dXJuIG5ld0xvY2F0aW9uO1xufVxuXG5leHBvcnQgeyBnZXRMb2NhdGlvbiB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge1xuICBmZXRjaEZvcmVjYXN0LCBwcm9jZXNzSlNPTixcbn0gZnJvbSAnLi9tb2R1bGVzL2ZldGNoRm9yZWNhc3QnO1xuXG5pbXBvcnQgeyBnZXRMb2NhdGlvbiB9IGZyb20gJy4vbW9kdWxlcy91c2VySW5wdXRzJztcblxuaW1wb3J0IHsgdXBkYXRlR1VJIH0gZnJvbSAnLi9tb2R1bGVzL3Nob3dGb3JlY2FzdCc7XG5cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gIGNvbnN0IGZldGNoID0gUHJvbWlzZS5yZXNvbHZlKGZldGNoRm9yZWNhc3QoJ2JyaXNiYW5lJywgJzMnKSk7XG5cbiAgZmV0Y2gudGhlbigocmVzdWx0KSA9PiBwcm9jZXNzSlNPTihyZXN1bHQpKVxuICAgIC8vIC50aGVuKChyZXN1bHQpID0+IGNvbnNvbGUubG9nKHJlc3VsdCkpXG4gICAgLnRoZW4oKHJlc3VsdCkgPT4gdXBkYXRlR1VJKHJlc3VsdCkpO1xufTtcblxuY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvY2F0aW9uU3VibWl0Jyk7XG5jb25zdCBsb2NhdGlvbklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvY2F0aW9uSW5wdXQnKTtcblxuc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBjb25zdCBuZXdMb2NhdGlvbiA9IGdldExvY2F0aW9uKCk7XG5cbiAgY29uc3QgZmV0Y2ggPSBQcm9taXNlLnJlc29sdmUoZmV0Y2hGb3JlY2FzdChuZXdMb2NhdGlvbiwgJzMnKSk7XG5cbiAgZmV0Y2gudGhlbigocmVzdWx0KSA9PiBwcm9jZXNzSlNPTihyZXN1bHQpKVxuICAgIC50aGVuKChyZXN1bHQpID0+IHVwZGF0ZUdVSShyZXN1bHQpKTtcbn0pO1xuXG5sb2NhdGlvbklucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGV2ZW50KSA9PiB7XG4gIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcbiAgICBjb25zdCBuZXdMb2NhdGlvbiA9IGdldExvY2F0aW9uKCk7XG5cbiAgICBjb25zdCBmZXRjaCA9IFByb21pc2UucmVzb2x2ZShmZXRjaEZvcmVjYXN0KG5ld0xvY2F0aW9uLCAnMycpKTtcblxuICAgIGZldGNoLnRoZW4oKHJlc3VsdCkgPT4gcHJvY2Vzc0pTT04ocmVzdWx0KSlcbiAgICAgIC50aGVuKChyZXN1bHQpID0+IHVwZGF0ZUdVSShyZXN1bHQpKTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=