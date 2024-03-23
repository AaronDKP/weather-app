import {
  fetchForecast, processJSON,
} from './modules/fetchForecast';

import { getLocation } from './modules/userInputs';

import { updateGUI } from './modules/showForecast';

window.onload = () => {
  const fetch = Promise.resolve(fetchForecast('brisbane', '3'));

  fetch.then((result) => processJSON(result))
    .then((result) => updateGUI(result));
};

const submitBtn = document.getElementById('locationSubmit');
const locationInput = document.getElementById('locationInput');

submitBtn.addEventListener('click', () => {
  const newLocation = getLocation();

  const fetch = Promise.resolve(fetchForecast(newLocation, '3'));

  fetch.then((result) => processJSON(result))
    .then((result) => updateGUI(result));
});

locationInput.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    const newLocation = getLocation();

    const fetch = Promise.resolve(fetchForecast(newLocation, '3'));

    fetch.then((result) => processJSON(result))
      .then((result) => updateGUI(result));
  }
});
