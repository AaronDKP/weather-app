import {
  fetchForecast, processJSON,
} from './modules/fetchForecast';

import { getLocation } from './modules/userInputs';

window.onload = () => {
  const fetch = Promise.resolve(fetchForecast('Brisbane', '3'));

  fetch.then((result) => processJSON(result))
    .then((result) => console.log(result)); // delete when no longer required
};

const submitBtn = document.getElementById('locationSubmit');

submitBtn.addEventListener('click', () => {
  const newLocation = getLocation();

  const fetch = Promise.resolve(fetchForecast(newLocation, '3'));

  fetch.then((result) => processJSON(result))
    .then((result) => console.log(result)); // delete when no longer required
});

// style webpage
// add error handling to location searches / using promises or catch statements?
