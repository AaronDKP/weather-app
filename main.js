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
  console.log(json); // delete when no longer required
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
    const minTempC = dayObj.day.mintemp_c;
    const maxTempC = dayObj.day.maxtemp_c;

    return {
      date, condition, minTempC, maxTempC,
    };
  }

  function filterForecastDays(array) {
    for (let i = 0; i < array.length; i++) {
      const day = getDailyForecast(array[i]);

      array[i] = day;
    }
  }

  const forecastDayArray = json.forecast.forecastday;

  filterForecastDays(forecastDayArray);

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




window.onload = () => {
  const fetch = Promise.resolve((0,_modules_fetchForecast__WEBPACK_IMPORTED_MODULE_0__.fetchForecast)('Brisbane', '3'));

  fetch.then((result) => (0,_modules_fetchForecast__WEBPACK_IMPORTED_MODULE_0__.processJSON)(result))
    .then((result) => console.log(result)); // delete when no longer required
};

const submitBtn = document.getElementById('locationSubmit');

submitBtn.addEventListener('click', () => {
  const newLocation = (0,_modules_userInputs__WEBPACK_IMPORTED_MODULE_1__.getLocation)();

  const fetch = Promise.resolve((0,_modules_fetchForecast__WEBPACK_IMPORTED_MODULE_0__.fetchForecast)(newLocation, '3'));

  fetch.then((result) => (0,_modules_fetchForecast__WEBPACK_IMPORTED_MODULE_0__.processJSON)(result))
    .then((result) => console.log(result)); // delete when no longer required
});

// style webpage
// add error handling to location searches / using promises or catch statements?

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRGQUE0RixTQUFTLFFBQVEsS0FBSztBQUNsSCxVQUFVLGNBQWM7QUFDeEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTs7QUFFQTtBQUNBLFVBQVUsVUFBVTtBQUNwQixVQUFVLE9BQU87QUFDakI7O0FBRUEsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsV0FBVztBQUNyQixVQUFVLEtBQUs7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0Isa0JBQWtCO0FBQ3RDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYOztBQUlFOzs7Ozs7Ozs7Ozs7Ozs7QUNuRkY7QUFDQTtBQUNBO0FBQ0E7O0FBRXVCOzs7Ozs7O1VDTHZCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDSmlDOztBQUVrQjs7QUFFbkQ7QUFDQSxnQ0FBZ0MscUVBQWE7O0FBRTdDLHlCQUF5QixtRUFBVztBQUNwQyw0Q0FBNEM7QUFDNUM7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsZ0VBQVc7O0FBRWpDLGdDQUFnQyxxRUFBYTs7QUFFN0MseUJBQXlCLG1FQUFXO0FBQ3BDLDRDQUE0QztBQUM1QyxDQUFDOztBQUVEO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2ZldGNoRm9yZWNhc3QuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy91c2VySW5wdXRzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gZmV0Y2hGb3JlY2FzdChsb2NhdGlvbiwgZGF5cykge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHJlc29sdmUoXG4gICAgICBmZXRjaChcbiAgICAgICAgYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PWMyYTk4MjYzOGNmZDQ3ZWVhMzQ0MDMzOTI0MjQwMiZxPSR7bG9jYXRpb259JmRheXM9JHtkYXlzfWAsXG4gICAgICAgIHsgbW9kZTogJ2NvcnMnIH0sXG4gICAgICApLFxuICAgICk7XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLXByb21pc2UtcmVqZWN0LWVycm9yc1xuICAgIHJlamVjdCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRKU09OKHJlc3VsdCkge1xuICBjb25zdCBqc29uID0gcmVzdWx0Lmpzb24oKTtcbiAgY29uc29sZS5sb2coanNvbik7IC8vIGRlbGV0ZSB3aGVuIG5vIGxvbmdlciByZXF1aXJlZFxuICByZXR1cm4ganNvbjtcbn1cblxuZnVuY3Rpb24gZ2V0TG9jYXRpb24oanNvbikge1xuICBjb25zdCB7IGNvdW50cnkgfSA9IGpzb24ubG9jYXRpb247XG4gIGNvbnN0IHsgbmFtZSB9ID0ganNvbi5sb2NhdGlvbjtcbiAgY29uc3QgbG9jYWxUaW1lID0ganNvbi5sb2NhdGlvbi5sb2NhbHRpbWUuc2xpY2UoLTUpO1xuXG4gIHJldHVybiB7IGNvdW50cnksIG5hbWUsIGxvY2FsVGltZSB9O1xufVxuXG5mdW5jdGlvbiBnZXRDdXJyZW50KGpzb24pIHtcbiAgY29uc3QgY29uZGl0aW9uID0ganNvbi5jdXJyZW50LmNvbmRpdGlvbi50ZXh0O1xuICBjb25zdCB0ZW1wQyA9IGpzb24uY3VycmVudC50ZW1wX2M7XG4gIGNvbnN0IHRlbXBGID0ganNvbi5jdXJyZW50LnRlbXBfZjtcbiAgY29uc3QgZmVlbHNMaWtlQyA9IGpzb24uY3VycmVudC5mZWVsc2xpa2VfYztcbiAgY29uc3QgZmVlbHNMaWtlRiA9IGpzb24uY3VycmVudC5mZWVsc2xpa2VfZjtcbiAgY29uc3QgeyBodW1pZGl0eSB9ID0ganNvbi5jdXJyZW50O1xuICBjb25zdCB7IHV2IH0gPSBqc29uLmN1cnJlbnQ7XG4gIGNvbnN0IHdpbmREaXJlY3Rpb24gPSBqc29uLmN1cnJlbnQud2luZF9kaXI7XG4gIGNvbnN0IHdpbmRLUEggPSBqc29uLmN1cnJlbnQud2luZF9rcGg7XG4gIGNvbnN0IHdpbmRNUEggPSBqc29uLmN1cnJlbnQud2luZF9tcGg7XG5cbiAgcmV0dXJuIHtcbiAgICBjb25kaXRpb24sIHRlbXBDLCB0ZW1wRiwgZmVlbHNMaWtlQywgZmVlbHNMaWtlRiwgaHVtaWRpdHksIHV2LCB3aW5kRGlyZWN0aW9uLCB3aW5kS1BILCB3aW5kTVBILFxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRGb3JlY2FzdChqc29uKSB7XG4gIGZ1bmN0aW9uIGdldERhaWx5Rm9yZWNhc3QoZGF5T2JqKSB7XG4gICAgY29uc3QgeyBkYXRlIH0gPSBkYXlPYmo7XG4gICAgY29uc3QgY29uZGl0aW9uID0gZGF5T2JqLmRheS5jb25kaXRpb24udGV4dDtcbiAgICBjb25zdCBtaW5UZW1wQyA9IGRheU9iai5kYXkubWludGVtcF9jO1xuICAgIGNvbnN0IG1heFRlbXBDID0gZGF5T2JqLmRheS5tYXh0ZW1wX2M7XG5cbiAgICByZXR1cm4ge1xuICAgICAgZGF0ZSwgY29uZGl0aW9uLCBtaW5UZW1wQywgbWF4VGVtcEMsXG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZpbHRlckZvcmVjYXN0RGF5cyhhcnJheSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGRheSA9IGdldERhaWx5Rm9yZWNhc3QoYXJyYXlbaV0pO1xuXG4gICAgICBhcnJheVtpXSA9IGRheTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBmb3JlY2FzdERheUFycmF5ID0ganNvbi5mb3JlY2FzdC5mb3JlY2FzdGRheTtcblxuICBmaWx0ZXJGb3JlY2FzdERheXMoZm9yZWNhc3REYXlBcnJheSk7XG5cbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oZm9yZWNhc3REYXlBcnJheSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHByb2Nlc3NKU09OKGZldGNoRGF0YSkge1xuICBjb25zdCBqc29uID0gYXdhaXQgZ2V0SlNPTihmZXRjaERhdGEpO1xuICBjb25zdCBsb2NhdGlvbiA9IGdldExvY2F0aW9uKGpzb24pO1xuICBjb25zdCBjdXJyZW50ID0gZ2V0Q3VycmVudChqc29uKTtcbiAgY29uc3QgZm9yZWNhc3QgPSBnZXRGb3JlY2FzdChqc29uKTtcblxuICByZXR1cm4geyBsb2NhdGlvbiwgY3VycmVudCwgZm9yZWNhc3QgfTtcbn1cblxuZXhwb3J0IHtcbiAgZmV0Y2hGb3JlY2FzdCwgcHJvY2Vzc0pTT04sXG59O1xuIiwiZnVuY3Rpb24gZ2V0TG9jYXRpb24oKSB7XG4gIGNvbnN0IG5ld0xvY2F0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvY2F0aW9uSW5wdXQnKS52YWx1ZTtcbiAgcmV0dXJuIG5ld0xvY2F0aW9uO1xufVxuXG5leHBvcnQgeyBnZXRMb2NhdGlvbiB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge1xuICBmZXRjaEZvcmVjYXN0LCBwcm9jZXNzSlNPTixcbn0gZnJvbSAnLi9tb2R1bGVzL2ZldGNoRm9yZWNhc3QnO1xuXG5pbXBvcnQgeyBnZXRMb2NhdGlvbiB9IGZyb20gJy4vbW9kdWxlcy91c2VySW5wdXRzJztcblxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcbiAgY29uc3QgZmV0Y2ggPSBQcm9taXNlLnJlc29sdmUoZmV0Y2hGb3JlY2FzdCgnQnJpc2JhbmUnLCAnMycpKTtcblxuICBmZXRjaC50aGVuKChyZXN1bHQpID0+IHByb2Nlc3NKU09OKHJlc3VsdCkpXG4gICAgLnRoZW4oKHJlc3VsdCkgPT4gY29uc29sZS5sb2cocmVzdWx0KSk7IC8vIGRlbGV0ZSB3aGVuIG5vIGxvbmdlciByZXF1aXJlZFxufTtcblxuY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvY2F0aW9uU3VibWl0Jyk7XG5cbnN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgY29uc3QgbmV3TG9jYXRpb24gPSBnZXRMb2NhdGlvbigpO1xuXG4gIGNvbnN0IGZldGNoID0gUHJvbWlzZS5yZXNvbHZlKGZldGNoRm9yZWNhc3QobmV3TG9jYXRpb24sICczJykpO1xuXG4gIGZldGNoLnRoZW4oKHJlc3VsdCkgPT4gcHJvY2Vzc0pTT04ocmVzdWx0KSlcbiAgICAudGhlbigocmVzdWx0KSA9PiBjb25zb2xlLmxvZyhyZXN1bHQpKTsgLy8gZGVsZXRlIHdoZW4gbm8gbG9uZ2VyIHJlcXVpcmVkXG59KTtcblxuLy8gc3R5bGUgd2VicGFnZVxuLy8gYWRkIGVycm9yIGhhbmRsaW5nIHRvIGxvY2F0aW9uIHNlYXJjaGVzIC8gdXNpbmcgcHJvbWlzZXMgb3IgY2F0Y2ggc3RhdGVtZW50cz9cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==