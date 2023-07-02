'use strict';

import { renderCalcDist } from './render-calculate-distance.js';
import { SEX } from '../constants/constants.js';

const calcDist = document.querySelectorAll('.calc-dist');

export const renderWinPrefTime = (
  elementsContainer,
  data,
  winPrefTimeValues,
  startDataInputValue,
) => {
  const elements = data.map((element) => {
    const value = winPrefTimeValues[element]?.split(':') ?? ['00', '00'];

    return `
      <div class="grid-item input-container" data-input-id="time-${element}">
        <div class="input-group">
          <input class="form-control" name="minutes" type="number" min=0 max=60 value="${value[0]}" />
          <span class="input-group-text">хв</span>
        </div>
        <div class="input-group">
          <input class="form-control" name="seconds" type="number" min=0 max=60 value="${value[1]}" />
          <span class="input-group-text">сек</span>
        </div>
      </div>
    `;
  });

  elementsContainer.innerHTML = elements.join('');

  const updateWinPrefTime = () => {
    data.forEach((element) => {
      const inputsContainer = elementsContainer.querySelector(`[data-input-id="time-${element}"]`);
      const inputs = inputsContainer.querySelectorAll('input');
      const hours = inputs[0].value.padStart(2, '0');
      const minutes = inputs[1].value.padStart(2, '0');

      winPrefTimeValues[element] = `${hours}:${minutes}`;
    });
  };

  data.forEach((element) => {
    const inputsContainer = elementsContainer.querySelector(`[data-input-id="time-${element}"]`),
      inputs = inputsContainer.querySelectorAll('input');

    inputs.forEach((input) => {
      input.addEventListener('input', () => {
        const distConteiner = element[0] === SEX[0] ? calcDist[0] : calcDist[1];

        updateWinPrefTime();
        renderCalcDist(distConteiner, data, winPrefTimeValues, startDataInputValue);
      });
    });
  });
};
