import { renderCalcWinTime } from './render-calculate-winner-time.js';
import { SEX } from '../constants/constants.js';

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
        <input name="minutes" type="number" min=0 max=60 step="0.1" value="${value}" />
        <span>км</span>
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
      input = inputsContainer.querySelector('input'),
      calcTime = document.querySelectorAll('.calc-win-time');

      input.addEventListener('input', () => {
        const timeConteiner = element[0] === SEX[0] ? calcTime[0] : calcTime[1];

        updatePrefLendthDist();
        renderCalcWinTime(timeConteiner, data, prefLengthDist, startDataInputValue);
      });

  });
};
