'use strict';

import { renderCalcWinTime } from './render-calculate-winner-time.js';
import { SEX } from '../constants/constants.js';

const calcTime = document.querySelectorAll('.calc-win-time');

export const renderPrefLengthDist = (
  elementsContainer,
  data,
  prefLengthDist,
  startDataInputValue
) => {
  const elements = data.map((element) => {
    const value = prefLengthDist[element] || 0.00;

    return `
      <div class="grid-item input-container" data-input-id="dist-${element}">
        <div class="input-group">
          <input class="form-control" name="minutes" type="number" min=0 max=60 step="0.1" value="${value}" />
          <span class="input-group-text">км</span>
        </div>
      </div>
    `;
  });

  elementsContainer.innerHTML = elements.join('');

  const updatePrefLendthDist = () => {
    data.forEach((element) => {
      const inputsContainer = elementsContainer.querySelector(`[data-input-id="dist-${element}"]`);
      const input = inputsContainer.querySelector('input');

      prefLengthDist[element] = input.value;
    });
  };

  data.forEach((element) => {
    const inputsContainer = elementsContainer.querySelector(`[data-input-id="dist-${element}"]`),
      input = inputsContainer.querySelector('input');

    input.addEventListener('input', () => {
      const timeConteiner = element[0] === SEX[0] ? calcTime[0] : calcTime[1];

      updatePrefLendthDist();
      renderCalcWinTime(timeConteiner, data, prefLengthDist, startDataInputValue);
    });

  });
};
